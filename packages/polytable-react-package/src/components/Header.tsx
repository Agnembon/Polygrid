import type { CellValue } from "@/core/types";
import { HeaderCell } from "@/components/HeaderCell";
import type { Key } from "react";

interface HeaderProps {
  key: Key;
  columns: CellValue[];
}

export const Header = ({ key, columns }: HeaderProps) => (
  <thead key={key}>
    <tr key={`row-${key}`}>
      {columns.map((value: CellValue, index: number) => (
        <HeaderCell key={index} value={value} />
      ))}
    </tr>
  </thead>
);
