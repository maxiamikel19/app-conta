const InputFormBlock = ({ icon, type, name, placeholder, value, onChange }) => {
  return (
    <div className="relative mb-6">
      <span className="absolute left-3 top-3 text-gray-400">{icon}</span>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputFormBlock;
