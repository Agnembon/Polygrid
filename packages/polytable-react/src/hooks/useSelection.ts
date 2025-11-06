import { useEffect, useRef, useState } from "react";
import type { CellCoordinates, CellValue, Table } from "@/types";
import { extendSelectionRange, initializeSelectionRange, type SelectionRange } from "@/models/SelectionRange.ts";
import { computeSelectionBounds, extractValuesWithinSelectionBounds } from "@/models/SelectionBounds.ts";

export function useSelection(table?: Table, onSelection?: (values: CellValue[][]) => void) {
    const [selectionRange, setSelectionRange] = useState<SelectionRange | null>(null);
    const isSelecting = useRef(false);

    useEffect(() => {
        window.addEventListener("mouseup", handleMouseUp);

        return () => window.removeEventListener("mouseup", handleMouseUp);
    });

    const handleMouseDown = (position: CellCoordinates) => {
        isSelecting.current = true;
        setSelectionRange(initializeSelectionRange(position));
    };

    const handleMouseEnter = (position: CellCoordinates) => {
        if (!isSelecting.current || !selectionRange) return;

        setSelectionRange(extendSelectionRange(selectionRange, position));
    };

    const handleMouseUp = () => {
        if (!isSelecting.current || !selectionRange || !table) return;

        isSelecting.current = false;

        const selectionBounds = computeSelectionBounds(selectionRange.start, selectionRange.end);
        const values = extractValuesWithinSelectionBounds(table.content, selectionBounds);

        onSelection?.(values);
    };

    return { selectionRange, handleMouseDown, handleMouseEnter };
}
