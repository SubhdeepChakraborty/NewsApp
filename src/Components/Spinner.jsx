import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
// import { useGlobalCustomHook } from "../utils/Context";

const Spinner = () => {
  // const { loading } = useGlobalCustomHook();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#0B2447");
  return (
    <div>
      <PulseLoader
        color={color}
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
