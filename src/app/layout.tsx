import Image from "next/image";
import Logo from "/public/logo-w.svg";
import "./globals.css";
import { Inter } from "next/font/google";
import LinkedInIcon from "/public/linkedin.svg";
import InstagramIcon from "/public/instagram.svg";
import FacebookIcon from "/public/facebook.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vive Nua, vive felicidad ",
  description: "Valida cómo están tus habilidades de vida y el burnout.",
};

const ICON_SIZE = 30;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          content="https://check.vivenua.com/logo-og.png"
        />
        <meta property="og:image:type" content="image/svg" />
      </head>
      <body className={inter.className}>
        {children}
        <footer className="h-32 text-md sm:text-xs grid grid-cols-7 items-center bg-nua-purple-secondary text-nua-white-main font-text font-bold">
          <span className="col-start-2">
            <p>Vive Nua, vive felicidad </p> <p> Nua © 2023 </p>
          </span>
          <span className="col-start-4 text-center">
            <a
              href="https://www.vivenua.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image className="m-auto" src={Logo} alt="logo" height={25} />
              <p className="text-sm">Conoce Vive Nua</p>
            </a>
          </span>
          <span className="col-start-6">
            <p className="font-title font-bold text-xl pb-2">Síguenos</p>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=100090857894017"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="inline"
                  src={FacebookIcon}
                  alt="facebook"
                  height={ICON_SIZE}
                  width={ICON_SIZE}
                />
              </a>
              <a
                href="https://www.instagram.com/vivenua/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="inline"
                  src={InstagramIcon}
                  alt="instagram"
                  height={ICON_SIZE}
                  width={ICON_SIZE}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/vivenua/jobs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="inline"
                  src={LinkedInIcon}
                  alt="linkedin"
                  height={ICON_SIZE}
                  width={ICON_SIZE}
                />
              </a>
            </div>
          </span>
        </footer>
      </body>
    </html>
  );
}
