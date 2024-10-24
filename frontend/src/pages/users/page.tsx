/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/user/components/dialog";
import Search from "@/components/user/search";
import UserDataTable from "@/components/user/userdatatable";
import Filter from "@/components/user/filter";

export default function Users() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("") as any
  const [status, setStatus] = useState(null)

  const onSearch = (value: string) => {
    setSearch(value)
  }

  const onStatus = (value: any) => {
    setStatus(value)
  }

  return (
    <div className="container mx-auto py-10">
      <>
      {status}
        <div className="flex justify-between items-center mb-4">
          <Button onClick={() => setOpen(!open)}>Add Usuário</Button>
          <Search onSearch={onSearch} search={search} />
          <Filter onStatus={onStatus} />
        </div>
        <Modal open={open} setOpen={setOpen} />
        <UserDataTable search={search} status={status} />
      </>
    </div>
  );
}