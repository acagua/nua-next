import React from "react";
import { Widget } from "@typeform/embed-react";

export const FormWidget = ({
  callback,
}: {
  callback: (arg: string) => void;
}) => {
  return (
    <div>
      <Widget
        id={process.env.PUBLIC_NEXT_FORM_ID || ""}
        style={{ width: "100%", height: "90vh" }}
        className="my-form"
        onSubmit={({ responseId }) => callback(responseId)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          callback("d6mjzbqchshbivf6d6mjzv1bf0360vh2");
        }}
      >
        SIMULATE RESPONSE
      </button>
    </div>
  );
};
