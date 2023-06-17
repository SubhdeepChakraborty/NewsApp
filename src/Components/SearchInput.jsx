import React from "react";
import { useGlobalCustomHook } from "../utils/Context";

const SearchInput = () => {
  const { query, searchPost } = useGlobalCustomHook();
  return (
    <div
      className="h-[46px] md:w-[450px] flex items-center justify-center mr-2
    gap-3 px-2 bg-white
     top-9 absolute font-[Sen] text-xl rounded border-b-4 border-[#19376D]"
    >
      <input
        className="grow outline-0 text-black/[0.87]"
        autoFocus
        placeholder="Search.."
        value={query}
        onChange={(e) => searchPost(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
