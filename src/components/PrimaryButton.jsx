const PrimaryButton = ({ type, label, onClick }) => {
  return (
    <button
      type={type}
      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition capitalize"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
