import type { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  style: string;
}

function Button({ children, style }: Prop) {
  return (
    <button
      className={"hover:cursor-pointer btn " + style}
      onClick={(event) => event.preventDefault()}
    >
      {children}
    </button>
  );
}

export default Button;
