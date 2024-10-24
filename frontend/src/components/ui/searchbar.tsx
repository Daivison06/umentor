import { SearchIcon } from "lucide-react"
import { Input } from "./input"
import { ChangeEvent } from "react";

const SearchBar = ({ onSearch, search }: { onSearch: (value: string) => void, search: string }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <>
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg relative w-2/5">
                <Input type="text" placeholder="Digite um nome ou email" className="m-0 p-2" onChange={handleChange} defaultValue={search} />
                <SearchIcon className="text-gray-500 dark:text-gray-400 absolute right-2 w-12px" />
            </div>
        </>
    )
}

export default SearchBar