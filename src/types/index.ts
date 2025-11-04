export interface TableData {
  header: CellValue[];
  content: CellValue[][];
}

export interface CellValue {
  value: string | number;
}

export interface CellPosition {
  row: number;
  column: number;
}

