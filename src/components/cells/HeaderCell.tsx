import type { CellValue } from "@/types";

interface HeaderCellProps {
  cellValue: CellValue; 
}

export const HeaderCell = ({ cellValue }: HeaderCellProps) => (
  <td className={`w-30 h-8 border border-gray-300 text-center select-none font-bold bg-gray-100 text-gray-800`}>
    {cellValue.value}
  </td>
);