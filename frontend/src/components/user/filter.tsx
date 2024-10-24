/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const Filter = ({ onStatus }: { onStatus: (value: string) => void }) => {
  const handleChange = (e: any) => {
    onStatus(e == 'all' ? '' : e);
  };

  return (
    <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="1">Ativo</SelectItem>
            <SelectItem value="0">Inativo</SelectItem>
        </SelectContent>
    </Select>
  )
}

export default Filter
