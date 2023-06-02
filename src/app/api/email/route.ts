import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import { EmailShareReport } from "../../../emails/ShareReport";
import { sendMail } from "../../../helpers/email";
import nodemailer from "nodemailer";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  //   await sendMail("af.cagua1011@gmail.com", "Welcome to NextAPI", {
  //     html: render(
  //       EmailShareReport({
  //         name: "Andy",
  //         reportId: "https://nua-next.vercel.app/",
  //       })
  //     ),
  //   });
  //   await sendMail("af.cagua1011@gmail.com", "subject", "bodyyy");

  // Create a SMTP transport object

  // if you don't want to use this transport object anymore, uncomment following line
  //transport.close(); // close the connection pool
  //   });

  return NextResponse.json({ response: "sent" }, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  var transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL_FROM,
    to: body.email,
    subject: "Aqui estan tus resultados de Vive Nua",
    text: "Reporte con url: https://nua-next.vercel.app/",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return NextResponse.json(
        { response: "error while sending email" },
        { status: 400 }
      );
    } else {
      console.log("Email sent: " + info.response);
      return NextResponse.json({ response: "sent" }, { status: 200 });
    }
  });
  return NextResponse.json({ response: "none" }, { status: 200 });
}
