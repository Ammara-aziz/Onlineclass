import { ImSpinner9 } from "react-icons/im";

const loading = () => {
  return (
    <div>
      <button type="button" className="flex content-center bg-indigo-500 ..." disabled>
        <ImSpinner9
          className="animate-spin h-5 w-5 mr-3 ... "
          viewBox="0 0 24 24"
        />
        Processing...
      </button>
    </div>
  );
};

export default loading;
