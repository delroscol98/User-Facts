import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

// const DUMMY_DATA = [
//   { username: "cdrosario03", age: "34" },
//   { username: "delroscol98", age: "23" },
//   { username: "collindelrosario98", age: "25" },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataHandler = (data) => {
    setData((prevData) => {
      return [data, ...prevData];
    });
    console.log(data);
  };

  return (
    <div>
      <AddUser dataReceiver={dataHandler} />
      <UsersList data={data} />
    </div>
  );
}

export default App;
