import { useState, useRef } from 'react';
import { Cell } from '@/components/Cell.tsx';
import { SelectionRange } from '@/domain/model/SelectionRange';
import type { CellPosition } from '@/domain/vo/CellPosition.ts';

interface SelectableTableProps {
  rows: number;
  columns: number;
}

export const Table = ({ rows, columns }: SelectableTableProps) => {
  const [selection, setSelection] = useState<SelectionRange | null>(null);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const startRef = useRef<CellPosition | null>(null);

  const handleMouseDown = (cell: CellPosition) => {
    startRef.current = cell;
    setSelection(new SelectionRange(cell, cell));
    setIsSelecting(true);
  };

  const handleMouseEnter = (cell: CellPosition) => {
    if (isSelecting && startRef.current) {
      setSelection(new SelectionRange(startRef.current, cell));
    }
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
    startRef.current = null;
  };

  return (
    <div onMouseUp={handleMouseUp} className="inline-block select-none">
      <table className="border-collapse">
        <tbody>
          {Array.from({ length: rows }).map((_, row) => (
            <tr key={row}>
              {Array.from({ length: columns }).map((_, column) => (
                <Cell
                  position={{ row, column }}
                  isSelected={selection?.contains({ row, column }) ?? false}
                  onMouseDown={handleMouseDown}
                  onMouseEnter={handleMouseEnter}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
