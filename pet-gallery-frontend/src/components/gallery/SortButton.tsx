import React from 'react';

interface Props {
  onSort: (order: 'asc' | 'desc') => void;
}

const SortButton: React.FC<Props> = ({ onSort }) => {
  return (
    <button
      onClick={() => onSort('asc')}
      className="px-4 py-2 m-2 rounded bg-green-500 text-white"
    >
      Sort A-Z
    </button>
  );
};

export default SortButton;
