import { createContext } from "react";

const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
});
export const FavouriteContextProvider = (props) => {
  const [userFavourites, setuserFavourites] = useState([]);

  const addFavouriteHandler = (favouriteMeetup) => {
    setuserFavourites([...userFavourites, favouriteMeetup]);
  };
  const removeFavouriteHandler = (meetupId) => {
    setuserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const isFavouriteHandler = (meetupId) => {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  };
  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: isFavouriteHandler,
  };
  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;
