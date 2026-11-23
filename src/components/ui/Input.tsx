import { cn } from "../../lib/utils";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500",
        className
      )}
      {...props}
    />
  );
}

export default Input;