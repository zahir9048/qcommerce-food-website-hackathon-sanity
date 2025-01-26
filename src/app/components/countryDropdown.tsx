import { countries } from "countries-list";

interface CountryDropdownProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CountryDropdown = ({ value, onChange }: CountryDropdownProps) => {
  const countryCodes = Object.keys(countries) as (keyof typeof countries)[];

  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
    >
      {countryCodes.map((code) => (
        <option key={code} value={countries[code].name}>
          {countries[code].name}
        </option>
      ))}
    </select>
  );
};

export default CountryDropdown;