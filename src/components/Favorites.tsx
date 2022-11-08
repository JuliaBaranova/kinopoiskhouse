import { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

export const Favorites = ({ id }: { id: number }) => {
  const [storageItem, setStorageItem] = useState(() =>
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  const isFavorited = storageItem.includes(id); 

  const handleToggleFavourite = () => {
    if (!isFavorited) {
      const newStorageItem = [...storageItem, id];
      setStorageItem(newStorageItem);
      localStorage.setItem("favorites", JSON.stringify(newStorageItem));
    } else {
      const newStorageItem = storageItem.filter(
        (savedId: any) => savedId !== id
      );
      setStorageItem(newStorageItem);
      localStorage.setItem("favorites", JSON.stringify(newStorageItem));
    }
  };
  return (
    <IconButton onClick={handleToggleFavourite}>
      {isFavorited ? (
        <Favorite color="error" />
      ) : (
        <FavoriteBorder color="error" />
      )}
    </IconButton>
  );
};
