import React, { useEffect } from "react";
// import { AppContext } from "../utils/Context";
import { useGlobalCustomHook } from "../utils/Context";
import Spinner from "./Spinner";
const Stories = () => {
  const { hits, nbPages, loading, removePost } = useGlobalCustomHook();

  // if (loading) {
  //   return (
  //     <>
  //       <h1>loading....</h1>
  //     </>
  //   );
  // }

  return (
    <div
      className="text-white font-semibold absolute top-40 lg:w-full lg:flex lg:flex-col lg:right-3
    lg:items-center lg:justify-center flex flex-col items-center justify-center"
    >
      {loading ? (
        <>
          <div>
            <Spinner />
          </div>
        </>
      ) : (
        <>
          {hits.map((curr) => {
            return (
              <>
                <div
                  className="bg-white/[0.8] px-7 py-4 rounded-2xl w-11/12 
                  md:w-[700px] mb-10 p-12 flex items-start flex-col border-4 border-solid border-black
                  border-t-0 border-l-0
                  "
                  // data-aos="zoom-in"
                >
                  <div className=" w-full mb-2 font-bold text-[#0B2447] underline md:text-3xl text-xl">
                    <h1>{curr.title}</h1>
                  </div>
                  <div className="text-[Sen] text-black mt-2">
                    {curr.author} | {curr.num_comments} Comments
                  </div>
                  <div className="mt-3 mb-3">
                    <a
                      className="bg-gray-900 px-2 py-1 rounded text-sm  bottom-1 mt-6 md:text-xl cursor-pointer "
                      href={curr.url}
                    >
                      {" "}
                      Read More
                    </a>
                    <a
                      className="bg-red-800 px-2 py-1 rounded md:inline-block bottom-1 mt-6 md:text-xl text-sm md:ml-[24rem] hidden cursor-pointer"
                      onClick={() => removePost(curr.objectID)}
                    >
                      {" "}
                      Remove
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Stories;
