interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-5
        py-2.5
        rounded-lg
        bg-white
        text-black
        font-medium
        transition
        hover:bg-gray-200
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;