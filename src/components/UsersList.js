import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  return (
    <div className="users">
      <ul>
        {props.data.map((entry) => {
          // console.log(entry.age);
          return (
            <Card key={Math.random() * 1000}>
              <li>
                {entry.username} ({entry.age} years old)
              </li>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
