import { useState } from "react";

import "./App.css";
import Counter from "./Counter";
import ButtonBar from "./ButtonBar";
import List from "./List";

function App() {
  const [users, setUsers] = useState<any[]>([]);

  const newUser = async () => {
    const resp = await fetch("https://randomuser.me/api/");
    const body = await resp.json();
    return body.results[0];
  };

  const addUser = async () => {
    setUsers([...users, await newUser()]);
  };

  const deleteMiddle = () => {
    const middleUser = users[Math.floor(users.length / 2)];
    const newUsers = users.filter((user) => user.id !== middleUser.id);
    setUsers(newUsers);
  };

  const clear = () => {
    setUsers([]);
  };

  const replaceFirst = async () => {
    const user = await newUser();
    setUsers([user, ...users.filter((_, index) => index !== 0)]); //slice(1)
  };

  const deleteCard = (key: string) => {
    console.log(key);
    console.log(users.filter((user) => user.id !== key));
    setUsers(users.filter((user) => user.id !== key));
  };

  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Users</h1>
        <p className="lead">List of honorable users.</p>
      </div>
      <Counter entityCount={users.length} />;
      <ButtonBar
        add={addUser}
        replaceFirst={replaceFirst}
        deleteMiddle={deleteMiddle}
        clear={clear}
        empty={users.length === 0}
      />
      <List deleteCard={deleteCard} entities={users} />
    </>
  );
}

export default App;
