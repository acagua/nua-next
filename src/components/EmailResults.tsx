import { useState } from "react";

interface Status {
  status: "Not Sent" | "Sent" | "Error" | "Sending";
  text: string;
}
export const EmailResults = ({
  name,
  email,
  reportId,
}: Record<string, string>) => {
  const [emailStatus, setEmailStatus] = useState<Status>({
    status: "Not Sent",
    text: "Envíamelo por correo",
  });
  const handleOnClick = async () => {
    setEmailStatus({ status: "Sending", text: "Enviando..." });
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, reportId }),
    });

    if (response.ok) {
      setEmailStatus({ status: "Sent", text: "Enviado" });
    } else {
      setEmailStatus({ status: "Error", text: "Intentar nuevamente" });
    }
    const data = await response.json();
    console.log({ data });
  };
  return (
    <>
      <button
        className="p-4 text-xl font-text bg-nua-green-secondary text-nua-white-main rounded-md hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-nua-purple-main"
        onClick={handleOnClick}
        disabled={
          emailStatus.status === "Sent" || emailStatus.status === "Sending"
        }
      >
        {emailStatus.text}
      </button>
      {/* {emailStatus.status === 'Sent' && <span> Reporte enviado a: {email} </span>} */}
    </>
  );
};
