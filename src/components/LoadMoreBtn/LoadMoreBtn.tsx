import Loader from "../Loader/Loader";
import useState from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return <button onClick={onClick}>Load More</button>;
}
