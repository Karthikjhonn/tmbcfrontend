import React from "react";

function Button({
  type = "button",
  title = "click me",
  disable = false,
  onclick,
}) {
  return (
    <button
      type={type}
      disabled={disable}
      onClick={onclick}
      className="px-4 py-2 min-h-11 rounded-[10px] bg-accent w-full text-white font-medium text-sm tracking-wide text-center shadow-md"
    >
      {title}
    </button>
  );
}

export default Button;
