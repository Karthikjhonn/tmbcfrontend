import React from "react";

function FormError({ message = "default message", error = false }) {
  if (error) {
    return (
      <p className="text-xs tracking-wide text-red-500 font-normal visible">
        {message}
      </p>
    );
  }
  return (
    <p className="text-xs tracking-wide text-red-500 font-normal invisible">
      {message}
    </p>
  );
}

export default FormError;
