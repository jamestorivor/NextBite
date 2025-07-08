import type { RefObject } from "react";

interface Prop {
  ref: RefObject<HTMLInputElement | null>;
  placeholder: string;
  type: string;
}

function TextBox({ ref, placeholder, type }: Prop) {
  return (
    <input
      className="border-2 border-black rounded-sm p-2"
      placeholder={placeholder}
      type={type}
      ref={ref}
    />
  );
}

export default TextBox;
