import React from "react";
import classes from "./Meetupitem.module.css";
import Card from "../ui/Card";

const MeetupItem = ({ image, title, address, description }) => {
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
          <button>To favourites</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
