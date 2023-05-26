"use client";

import { Widget } from "@typeform/embed-react";
import { useRouter } from "next/navigation";

export const FormWidget = () => {
  const router = useRouter();
  const handleSubmit = (id: string) => {
    router.push(`/${id}`);
  };
  return (
    <div>
      <Widget
        id={process.env.NEXT_PUBLIC_FORM_ID || ""}
        style={{ width: "100%", height: "100vh" }}
        className="my-form"
        onSubmit={({ responseId }) => handleSubmit(responseId)}
      />
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleSubmit("e8fyckdnzcjwmh95n6f7pe8fyo2xwlv7")}
      >
        SIMULATE RESPONSE
      </button> */}
    </div>
  );
};
