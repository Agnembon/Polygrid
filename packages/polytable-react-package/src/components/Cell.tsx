import type { CellCoordinates, CellValue } from '@/core/types';
import type { Key } from "react";

interface CellProps {
  key: Key;
  value: CellValue;
  coordinates: CellCoordinates;
  isSelected: boolean;
  onMouseDown: (coordinates: CellCoordinates) => void;
  onMouseEnter: (coordinates: CellCoordinates) => void;
}

export const Cell = ({ key, value, coordinates, isSelected, onMouseDown, onMouseEnter }: CellProps) => (
  <td
    key={key}
    onMouseDown={() => onMouseDown(coordinates)}
    onMouseEnter={() => onMouseEnter(coordinates)}
    className={`w-30 h-8 border border-gray-300 text-center cursor-pointer select-none ${
      isSelected ? 'bg-blue-200' : 'bg-white hover:bg-gray-100'
    }`}
  >
    {value}
  </td>
);
