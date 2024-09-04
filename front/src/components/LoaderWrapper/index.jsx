import { CircularProgress } from "@mui/material";

const LoaderWrapper = ({ isLoading, children, className }) => {
  return (
    <>
      {isLoading ? (
        <div
          className={`w-full h-[80svh] flex justify-center items-center ${className}`}
        >
          <div className="flex">
            <CircularProgress />
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoaderWrapper;
