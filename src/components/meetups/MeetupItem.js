import { useContext } from "react";
import React from "react";
import classes from "./Meetupitem.module.css";
import Card from "../ui/Card";
import FavouriteContext from "../../context/Favourites-Context";

const MeetupItem = ({ id, image, title, address, description }) => {
  const favouritesCtx = useContext(FavouriteContext);
  const itemIsFavourite = favouritesCtx.itemIsFavourite(id);
  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(id);
    } else {
      favouritesCtx.addFavourite({
        id,
        image,
        title,
        address,
        description,
      });
    }
  };
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "remove from favourites" : "add to favourites"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
