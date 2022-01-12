import React from "react";
import { useContext } from "react";
import FavouriteContext from "../context/Favourites-Context";
import MeetupList from "../components/meetups/MeetupList";
const Favourites = () => {
  const favouritesCtx = useContext(FavouriteContext);
  let content;
  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You have no favourites start adding some</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <div>
      <h1>Favourite meetups</h1>
      {content}
    </div>
  );
};

export default Favourites;
