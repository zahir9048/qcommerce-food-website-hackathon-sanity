import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  const handleSearch = () => {
    // Handle the search logic here
    console.log('Searching for:', query);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 w-full outline-none"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-[#FF9F0D] text-white transition-colors rounded-[5px]"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;