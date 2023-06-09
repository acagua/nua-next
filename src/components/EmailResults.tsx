import { useState } from "react";

export const EmailResults = ({
  name,
  email,
  reportId,
}: Record<string, string>) => {
  const [sent, setSent] = useState(false);
  const handleOnClick = async () => {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, reportId }),
    });

    if (response.ok) {
      setSent(true);
    }
  };
  return (
    <>
      <button
        className="p-4 text-xl font-text bg-nua-green-secondary text-nua-white-main rounded-md hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-nua-purple-main"
        onClick={handleOnClick}
        disabled={sent}
      >
        {sent ? "Enviado" : "Enviamelo por correo"}
      </button>
      {sent && <span> Reporte enviado a: {email} </span>}
    </>
  );
};
