import type { CellValue } from "@/core/types";
import { HeaderCell } from "@/components/HeaderCell";

interface HeaderProps {
  columns: CellValue[];
}

export const Header = ({ columns }: HeaderProps) => (
  <thead className="bg-indigo-200">
    <tr>
      {columns.map((value) => (
        <HeaderCell value={value} />
      ))}
    </tr>
  </thead>
);
