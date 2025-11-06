import type { CellCoordinates, CellValue } from "@/types";

export interface SelectionBounds {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export const computeSelectionBounds = (start: CellCoordinates, end: CellCoordinates): SelectionBounds => {
  return {
    top: Math.min(start.row, end.row),
    bottom: Math.max(start.row, end.row),
    left: Math.min(start.column, end.column),
    right: Math.max(start.column, end.column),
  };
}

export const isWithinSelectionBounds = (coordinates: CellCoordinates, selectionBounds: SelectionBounds): boolean => {
  return (
    coordinates.row >= selectionBounds.top &&
    coordinates.row <= selectionBounds.bottom &&
    coordinates.column >= selectionBounds.left &&
    coordinates.column <= selectionBounds.right
  );
}

export const extractValuesWithinSelectionBounds = (content: CellValue[][], selectionBounds: SelectionBounds): CellValue[][] => {
  const values: CellValue[][] = [];

  for (let rowIndex = selectionBounds.top; rowIndex <= selectionBounds.bottom; rowIndex++) {
    const row = content[rowIndex];
    if (!row) continue;

    values.push(row.slice(selectionBounds.left, selectionBounds.right + 1));
  }

  return values;
}
