import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import Loading from "./Loading";
import { useState, useEffect } from "react";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const getUsers = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://my-meetups-2169f-default-rtdb.firebaseio.com/meetups.json"
    );
    const data = await response.json();
    const meetups = [];
    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };
      meetups.push(meetup);
    }

    setIsLoading(false);
    setLoadedMeetups(meetups);
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    <Loading />;
  }
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetups;
