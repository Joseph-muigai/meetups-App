import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

const NewMeetups = () => {
  const history = useHistory();

  //this is to  send a http request to the firebaase api to store the inputed meetups in the database
  const AddMeetupHandler = (input) => {
    fetch("https://my-meetups-2169f-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(input),
      header: {
        "content-Type": "application/json",
      },
    }).then(() => history.replace("/"));
  };
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
};

export default NewMeetups;
