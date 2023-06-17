import React from "react";
import { useGlobalCustomHook } from "../utils/Context";

const Pagination = () => {
  const { page, nbPages, getNextPage, getPreviousPage } = useGlobalCustomHook();
  return (
    <div className="absolute top-[6rem] w-full flex items-center justify-center mt-2 font-[Sen]">
      <div onClick={() => getPreviousPage()} className="cursor-pointer">
        <i class="fa-solid fa-arrow-left fa-xl"></i>
      </div>
      <p className="font-semibold ml-24 text-white/[0.8] text-xl">
        {page + 1} of {nbPages}
      </p>
      <div className="ml-28 cursor-pointer" onClick={() => getNextPage()}>
        <i class="fa-solid fa-arrow-right fa-xl"></i>
      </div>
    </div>
  );
};

export default Pagination;
