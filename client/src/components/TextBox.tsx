interface Prop {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextBox({ placeholder, type, value, onChange }: Prop) {
  return (
    <input
      className="border-2 border-black rounded-sm p-2"
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
}

export default TextBox;