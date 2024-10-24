import { DataTable } from "./components/data_table";
import { columns } from "./components/columns";
import { useGetUsers } from "@/hooks/useUser";
import React from "react";

const UserDataTable = ({ search, status }: { search: string, status: string |null }) => {
    const { data, isLoading, isError } = useGetUsers(search, status);
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (isError) {
      return <p>Não foi possível encontrar resultados</p>;
    }
  
    if (!data) {
      return null;
    }
  
    return <DataTable columns={columns} data={data} />;
}
  
export default React.memo(UserDataTable);