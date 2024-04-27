import React, { useState } from 'react';

interface Props {
  onSort: (order: 'asc' | 'desc') => void;
}

const SortButton: React.FC<Props> = ({ onSort }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const toggleSortOrder = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    onSort(newOrder);
  };

  return (
    <button
      onClick={toggleSortOrder}
      className="px-4 py-2 m-2 rounded bg-teal-600 text-white"
    >
      Click to sort {sortOrder === 'asc' ? 'Z-A' : 'A-Z'}
    </button>
  );
};

export default SortButton;
