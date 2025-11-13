import type { CellValue } from "@/core/types";

interface HeaderCellProps {
  value: CellValue;
}

export const HeaderCell = ({ value }: HeaderCellProps) => (
  <th className="min-w-30 font-medium px-3 py-2 text-gray-800 select-none">
    {value}
  </th>
);
