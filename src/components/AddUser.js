import { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import "./AddUser.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName === "" || +enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (> 0)",
      });
      return;
    }

    const userData = {
      username: enteredName,
      age: enteredAge,
    };

    props.dataReceiver(userData);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <div className="input">
          <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={nameInputRef} />
            <label htmlFor="age">Age (Years)</label>
            <input type="text" id="age" ref={ageInputRef} />
            <Button type="submit">Add User</Button>
          </form>
        </div>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
