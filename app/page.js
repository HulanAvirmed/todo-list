"use client";

import { useEffect, useState } from "react";
import { ListItem, List, TodoContainer, ListSkeleton } from "@/components";
import { ThemeProvider } from "@/theme";
import { Skeleton } from "@mui/material";

export default function Main() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/todo/list?nocache=${Math.random()}`,
      {
        cache: "no-cache",
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    )
      .then((result) => result.json())
      .then((data) => {
        setTodoList(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onCreate = async (name) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({ name: name, completed: false }),
    })
      .then((result) => result.json())
      .then((data) => {
        setTodoList([
          { id: data.id, name: data.name, completed: data.completed },
          ...todoList,
        ]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onUpdate = async (name, id, completed) => {
    const index = todoList.findIndex((f) => f.id === id);

    if (index > -1) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`, {
        cache: "no-store",
        method: "PUT",
        body: JSON.stringify({ id: id, name: name, completed: completed }),
      })
        .then((result) => result.json())
        .then((data) => {
          let _todoList = [...todoList];

          _todoList[index] = {
            id: data.id,
            name: data.name,
            completed: data.completed,
          };

          setTodoList(_todoList);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const onCompleted = async (id) => {
    const index = todoList.findIndex((f) => f.id === id);

    if (index > -1) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`, {
        cache: "no-store",
        method: "PUT",
        body: JSON.stringify({
          id: id,
          name: todoList[index].name,
          completed: !todoList[index].completed,
        }),
      })
        .then((result) => result.json())
        .then((data) => {
          let _todoList = [...todoList];

          _todoList[index] = {
            id: data.id,
            name: data.name,
            completed: data.completed,
          };

          setTodoList(_todoList);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const onDelete = async (id) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`, {
      cache: "no-store",
      method: "DELETE",
      body: JSON.stringify({ id: id }),
    })
      .then((result) => result.json())
      .then((data) => {
        setTodoList(todoList.filter((f) => f.id != data.id));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <ThemeProvider>
      <TodoContainer
        taskCount={todoList?.filter((f) => f.completed !== true).length}
        onCreate={onCreate}
      >
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <List>
            {todoList
              ?.sort((a, b) => {
                return a.completed - b.completed;
              })
              .map((item, i) => (
                <ListItem
                  data={item}
                  onCompleted={onCompleted}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                  key={i}
                >
                  {item.name}
                </ListItem>
              ))}
          </List>
        )}
      </TodoContainer>
    </ThemeProvider>
  );
}
