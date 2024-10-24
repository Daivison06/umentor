"use client"
import { User } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Situação",
  },
  {
    accessorKey: "admission_date",
    header: "Data de admissão",
  },
]
