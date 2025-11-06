export type CellValue = string | number;

export interface CellCoordinates {
  row: number;
  column: number;
}

export interface Table {
  header: CellValue[];
  content: CellValue[][];
}
