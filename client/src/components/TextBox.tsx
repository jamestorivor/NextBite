import { useState } from "react";

interface Prop {
  placeholder: string;
  type: string;
}

function TextBox({ placeholder, type }: Prop) {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        className="border-2 border-black rounded-sm p-2"
        placeholder={placeholder}
        value={input}
        type={type}
        onChange={(event) => setInput(event.target.value)}
      />
    </>
  );
}

export default TextBox;
