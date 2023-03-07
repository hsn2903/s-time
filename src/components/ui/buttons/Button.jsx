const BUTTON_TYPE_CLASSES = {
  primary: "bg-indigo-900 text-white px-4 py-2 rounded-md",
  white: "px-4 py-2 rounded-md border border-blue-400 hover:border-blue-700",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      type="submit"
      className={`${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
