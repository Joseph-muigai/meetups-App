import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import Loading from "./Loading";
import { useState, useEffect } from "react";
const dummyData = [
  {
    id: "m1",
    title: "Meetup one",
    address: " MeetupStreet 5, 125 Meetup City",
    img: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "This is a first, amazing meetup which you dont want to miss.It will be amazing.",
  },
  {
    id: "m2",
    title: "Meetup two",
    address: " hellobing 5, 125 Meetup City",
    img: "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description:
      "This is a first, amazing meetup which you dont want to miss.It will be amazing.lorem ipsume is some dummy text that was used as aplaceholder text. ",
  },
];

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
