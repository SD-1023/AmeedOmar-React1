import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
const FavouritesContext = createContext({});

export const FavouriteProvider = ({ children }) => {
  const FAV_KEY = "fav_items";
  const { getItem, setItem } = useLocalStorage();
  const [favItems, setFavItems] = useState(getItem(FAV_KEY, []));
  const [isFavOpen, setIsFavOpen] = useState(false);

  useEffect(() => {
    setItem(FAV_KEY, favItems);
  }, [favItems]);
  const isFavItem = (itemId) => {
    return favItems.findIndex((item) => item.id === parseInt(itemId)) > -1;
  };

  const addToFavItems = (item) => {
    if (!isFavItem(item.id)) setFavItems((prev) => [...prev, item]);
    if (!isFavOpen) toggleIsFavOpen();
  };
  const removeFromFavItems = (id) => {
    setFavItems((prev) => prev.filter((item) => item.id != id));
  };

  const toggleIsFavOpen = () => {
    !isFavOpen && console.log("You are Opened favourites panel");
    isFavOpen && console.log("You are closed favourites panel");
    setIsFavOpen((prev) => !prev);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favItems,
        isFavOpen,
        isFavItem,
        toggleIsFavOpen,
        addToFavItems,
        removeFromFavItems,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
export const useFavourites = () => {
  return useContext(FavouritesContext);
};
