import "./App.css";
import { useState, useEffect, useRef } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import { UnsplashImage, UnsplashResponse } from "./types/unsplash";

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [selectImage, setSelectImage] = useState<UnsplashImage | null>(null);

  const accessKey = "1nokdkmlryQWXohn3LfguqFBsBe1OQTw2fZ7L-GZcdE";
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: UnsplashImage) => {
    setSelectImage(image);
  };

  const closeModal = () => {
    setSelectImage(null);
  };

  const handleSearchSubmit = (newQuery: string) => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const fetchImages = async (query: string, pageNumber = 1) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${query}&page=${pageNumber}&per_page=10`
      );

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: Failed to load images`);
      }

      const data = (await response.json()) as UnsplashResponse;

      setImages((prevImages) => [...prevImages, ...data.results]);

      setTotalPages(data.total_pages);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) fetchImages(query, page);
  }, [query, page]);

  useEffect(() => {
    if (page > 1 && loadMoreRef.current) {
      const { top } = loadMoreRef.current.getBoundingClientRect();
      const scrollOffset = window.scrollY + top;
      window.scrollTo({ top: scrollOffset, behavior: "instant" });
    }
  }, [images]);

  return (
    <>
      <SearchBar handleSearchSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />

      {loading && <Loader loading={loading} color="grey" />}

      {page < totalPages && <LoadMoreBtn onClick={loadMoreImages} />}

      <ImageModal onClose={closeModal} photo={selectImage} />
    </>
  );
}

export default App;
