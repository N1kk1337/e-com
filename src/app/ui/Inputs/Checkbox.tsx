'use client';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <label
      className={`flex items-center space-x-3 ${disabled ? 'text-gray-400' : 'text-gray-800'}`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.checked)}
        className={`w-5 h-5 rounded ${disabled ? 'bg-gray-200' : 'bg-white border-2 border-blue-500'} checked:bg-blue-500 focus:ring-2 focus:ring-blue-400`}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
