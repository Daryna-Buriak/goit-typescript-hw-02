import ClipLoader from "react-spinners/ClipLoader";
import CSSProperties from "react";

interface LoaderProps {
  loading: boolean;
  color: string;
}

export default function Loader({ loading, color }: LoaderProps) {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "grey",
  };

  return (
    <ClipLoader
      color={color || "grey"}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
