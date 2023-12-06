"use client";

import { useState } from "react";
import { CreateButton, ListItem, List, TodoContainer } from "@/components";
import { ThemeProvider } from "@/theme";

export default function Main() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Work",
    },
    {
      id: 2,
      name: "Home",
    },
    {
      id: 3,
      name: "School",
    },
  ]);

  const onCreate = (name) => {
    setTodoList([...todoList, { id: new Date().toString(), name: name }]);
  };

  const onUpdate = (name, id) => {
    const index = todoList.findIndex((f) => f.id === id);

    if (index > -1) {
      let _todoList = [...todoList];

      _todoList[index] = {
        id: id,
        name: name,
      };

      setTodoList(_todoList);
    }
  };

  const onDelete = (id) => {
    setTodoList(todoList.filter((f) => f.id != id));
  };

  return (
    <ThemeProvider>
      <TodoContainer
        taskCount={todoList.length}
        createButton={<CreateButton onCreate={onCreate} />}
      >
        <List>
          {todoList.map((item, i) => (
            <ListItem
              data={item}
              onUpdate={onUpdate}
              onDelete={onDelete}
              key={i}
            >
              {item.name}
            </ListItem>
          ))}
        </List>
      </TodoContainer>
    </ThemeProvider>
  );
}
