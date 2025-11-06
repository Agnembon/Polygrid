import type { CellCoordinates } from "@/types";

export interface SelectionRange {
  start: CellCoordinates;
  end: CellCoordinates;
}

export const initializeSelectionRange = (start: CellCoordinates): SelectionRange => {
  return { start, end: start };
};

export const extendSelectionRange = (selectionRange: SelectionRange, end: CellCoordinates): SelectionRange => {
  return { start: selectionRange.start, end };
};
