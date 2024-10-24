import { ColumnDef } from "@tanstack/react-table"

export type User = {
    name: string
    email: string
    status: boolean
    admission_date: Date
}

export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]

}

export interface ModalProps {
    open: boolean,
    setOpen: (open: boolean) => void;
}