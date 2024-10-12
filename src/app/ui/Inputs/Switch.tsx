'use client';

interface SwitchProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <label
      className={`flex items-center space-x-3 ${disabled ? 'text-gray-400' : 'text-gray-800'}`}
    >
      <span className="relative">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`block w-10 h-6 rounded-full ${checked ? 'bg-blue-500' : 'bg-gray-300'} ${
            disabled ? 'opacity-50' : ''
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${
            checked ? 'transform translate-x-full' : ''
          } ${disabled ? 'opacity-50' : ''}`}
        ></div>
      </span>
      <span>{label}</span>
    </label>
  );
};

export default Switch;
