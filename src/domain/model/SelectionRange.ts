import type { CellPosition } from '@/domain/vo/CellPosition.ts';

export class SelectionRange {
  constructor(
    public readonly start: CellPosition,
    public readonly end: CellPosition
  ) {}

  contains(cell: CellPosition): boolean {
    return (
      cell.row >= this.topRow &&
      cell.row <= this.bottomRow &&
      cell.column >= this.leftColumn &&
      cell.column <= this.rightColumn
    );
  }

  private get topRow(): number {
    return Math.min(this.start.row, this.end.row);
  }

  private get bottomRow(): number {
    return Math.max(this.start.row, this.end.row);
  }

  private get leftColumn(): number {
    return Math.min(this.start.column, this.end.column);
  }

  private get rightColumn(): number {
    return Math.max(this.start.column, this.end.column);
  }
}
