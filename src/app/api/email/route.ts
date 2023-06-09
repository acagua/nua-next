import { NextResponse } from "next/server";

import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const oAuth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

export async function POST(request: Request) {
  const body = await request.json();
  const accessToken = (await oAuth2Client.getAccessToken()).token;
  console.log(
    accessToken,
    process.env.REDIRECT_URI,
    process.env.REFRESH_TOKEN,
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
  );

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || ""),
    secure: true,
    auth: {
      type: "OAuth2",
      clientId: process.env.CLIENT_ID,
      accessToken: accessToken || "",
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL_FROM,
    to: body.email,
    subject: "Nua - Aqui tienes tu Diagnóstico",
    text: `Hola ${body.name}!
    
    Puedes consultar tu reporte en cualquier momento entrando a este link: https://check.vivenua.com/${body.reportId}
    
    Gracias!`,
    auth: {
      user: process.env.EMAIL_ADDRESS,
    },
  };

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  return NextResponse.json({ response: "sent" }, { status: 200 });
}
