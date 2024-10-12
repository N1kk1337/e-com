'use client';

interface RadioButtonProps {
  label: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <label
      className={`flex items-center space-x-3 ${disabled ? 'text-gray-400' : 'text-gray-800'}`}
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={`w-5 h-5 ${disabled ? 'bg-gray-200' : 'bg-white border-2 border-blue-500'} checked:bg-blue-500 focus:ring-2 focus:ring-blue-400`}
      />
      <span>{label}</span>
    </label>
  );
};

export default RadioButton;
