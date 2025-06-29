import type { ReactNode, MouseEventHandler } from "react";

interface Prop {
  children: ReactNode;
  style: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, style, onClick }: Prop) {
  return (
    <button
      className={"hover:cursor-pointer btn " + style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;