import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useState, FormEvent, ChangeEvent } from "react";

interface SearchBarProps {
  handleSearchSubmit: (query: string) => void;
}

export default function SearchBar({ handleSearchSubmit }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      toast.error("Search should not be empty.");
      return;
    }

    handleSearchSubmit(inputValue.trim());
    setInputValue("");
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
}
