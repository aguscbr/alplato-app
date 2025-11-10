import type { Column } from "./Column.interface";

export interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    keyExtractor: (row: T, index: number) => string | number;
    className?: string;
    striped?: boolean;
    hoverable?: boolean;
    bordered?: boolean;
    loading?: boolean;
    emptyMessage?: string;
    onRowClick?: (row: T, index: number) => void;
    responsive?: "scroll" | "stack";
}

export interface TableHeadProps<T> {
    columns: Column<T>[];
    bordered?: boolean;
}

export interface TableBodyProps<T> {
    data: T[];
    columns: Column<T>[];
    keyExtractor: (row: T, index: number) => string | number;
    striped?: boolean;
    hoverable?: boolean;
    bordered?: boolean;
    onRowClick?: (row: T, index: number) => void;
    responsive?: "scroll" | "stack";
}

export interface TableCellProps {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    className?: string;
    width?: string;
}