import React from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Filter pets (title or description)..."
      className="p-2 border border-gray-200 rounded"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
