import type { CellValue } from '@/core/types';
import type { Key } from 'react';

interface HeaderCellProps {
  key: Key;
  value: CellValue;
}

export const HeaderCell = ({ key: id, value }: HeaderCellProps) => (
  <td key={id} className={`w-30 h-8 border border-gray-300 text-center select-none font-bold bg-gray-100 text-gray-800`}>
    {value}
  </td>
);
