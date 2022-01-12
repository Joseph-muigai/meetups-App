import { createContext,useState } from "react";

const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => { },
  removeFavourite: (meetupId) => { },
  itemIsFavourite: (meetupId) => { }
  
  
});
export const FavouriteContextProvider = (props) => {
  const [userFavourites, setUserFavourites] = useState([])
  const addFavouriteHandler = (favouriteMeetup) => {
    setUserFavourites(prevUserFavourites => {
      prevUserFavourites.concat(favouriteMeetup)
    })
  }

  const removeFavouriteHandler = (meetupId) => {
    setUserFavourites((prevUserFavourites) => {
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
