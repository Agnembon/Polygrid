import type { CellValue, Table } from "@/types";
import { useSelection } from "@/hooks/useSelection";
import { computeSelectionBounds, isWithinSelectionBounds } from "@/models/SelectionBounds.ts";
import { HeaderCell } from "@/components/HeaderCell";
import { Cell } from "@/components/Cell";
import type { Key } from "react";

interface PolytableProps {
  id: Key;
  data: Table;
  onSelectionChange?: (selectedData: CellValue[][]) => void;
}

export const Polytable = ({id, data, onSelectionChange}: PolytableProps) => {
  const { selectionRange, handleMouseDown, handleMouseEnter } = useSelection(data, onSelectionChange);
  const bounds = selectionRange ? computeSelectionBounds(selectionRange.start, selectionRange.end) : null;

  return (
    <table key={id} className="border-collapse rounded-md">
      {data.header && data.header.length > 0 && (
        <thead key={`row-${id}-header`}>
        <tr>
          {data.header.map((value, index) => (
            <HeaderCell id={index} value={value} />
          ))}
        </tr>
        </thead>
      )}

      <tbody>
      {data.content.map((row, rowIndex) => (
        <tr key={`row-${id}-${rowIndex}`}>
          {row.map((value, columnIndex) => {
            const position = { row: rowIndex, column: columnIndex };
            const isSelected = bounds ? isWithinSelectionBounds(position, bounds) : false;

            return (
              <Cell
                id={`cell-${rowIndex}-${columnIndex}`}
                value={value}
                coordinates={position}
                isSelected={isSelected}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
              />
            );
          })}
        </tr>
      ))}
      </tbody>
    </table>
  );
};
