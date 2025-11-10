export interface Column<T> {
    key: keyof T | string;
    header: string;
    render?: (value: T[keyof T], row: T, index: number) => React.ReactNode;
    width?: string;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    className?: string;
}