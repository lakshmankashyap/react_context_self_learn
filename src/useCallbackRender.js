import React from "react";
import { log} from './utils';

const AppTwo = () => {
  const [users, setUsers] = React.useState([
    { id: "1", name: "Mark" },
    { id: "2", name: "Jack" }
  ]);

  const [text, setText] = React.useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers(users.concat({ id: Math.floor(Math.random() * 100), name: text }));
  };
  //without callback
//   const handleRemove = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };
  const handleRemove = React.useCallback(
    (id) => setUsers(users.filter((user) => user.id !== id)),
    [users]
    );
  log("The Component Render: AppTwo");
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} onRemove={handleRemove} />
    </div>
  );
};

const List = React.memo(({ list,     }) => {
  log("The Component Render: List");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ item, onRemove }) => {
  log("The Component Render: ListItem");
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
});

export default AppTwo;