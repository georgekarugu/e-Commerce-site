import { createContext, useState } from "react";

// Create Context
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults, searching, setSearching }}>
      {children}
    </SearchContext.Provider>
  );
};
