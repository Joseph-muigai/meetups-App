import React from "react";
import "./NewMeetupForm.css";
import Card from "../ui/Card";
import { useRef } from "react";

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const addressRef = useRef(null);
  const descriptionRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const input = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    onAddMeetup(input);
  };
  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">Meetup Title</label>
          <input type="text " required id=" title " ref={titleRef} />
        </div>
        <div className="control">
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id=" image " ref={imageRef} />
        </div>
        <div className="control">
          <label htmlFor="address">Meetup TitleAddress</label>
          <input type="text " required id=" adress " ref={addressRef} />
        </div>
        <div className="control">
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            required
            rows="10"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className="actions">
          <button type="submit"> Add meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
