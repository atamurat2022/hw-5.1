import React from "react";
import Card from "../UI/card/Card";
import classes from "./UserList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users
          .sort(function (a, b) {
            if (a["age"] < b["age"]) return -1;
          })
          .map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default UsersList;
