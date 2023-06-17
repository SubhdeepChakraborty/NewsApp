import React from "react";
import SearchInput from "./Components/SearchInput";
import Stories from "./Components/Stories";
import Pagination from "./Components/Pagination";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <SearchInput />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;
