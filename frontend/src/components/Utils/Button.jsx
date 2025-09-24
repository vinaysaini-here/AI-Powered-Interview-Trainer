export default function Button({ children, variant = "primary", onClick }) {
  const baseStyles =
    "px-4 py-2 text-sm rounded-md transition-colors duration-200";

  const variants = {
    primary: "bg-purple-600 hover:bg-purple-500 text-white",
    secondary: "bg-purple-800 hover:bg-purple-700 text-white",
    outline:
      "border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
