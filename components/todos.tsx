import React from "react";

const tasks = [
  {
    id: 1,
    task: "Task 1",
  },
  {
    id: 2,
    task: "Task 2",
  },
  {
    id: 3,
    task: "Task 3",
  },
  {
    id: 4,
    task: "Task 4",
  },
  {
    id: 5,
    task: "Task 5",
  },
  {
    id: 6,
    task: "Task 1",
  },
  {
    id: 7,
    task: "Task 2",
  },
  {
    id: 8,
    task: "Task 3",
  },
  {
    id: 9,
    task: "Task 4",
  },
  {
    id: 10,
    task: "Task 5",
  },
];

const todos = () => {
  return (
    <div className="max-h-[350px] overflow-auto mb-4">
      {tasks.map((items) => {
        return (
          <div className="flex items-center gap-2 mx-3 bg-white px-2 py-1.5 mt-2 rounded-md">
            <div className="px-2 py-2 bg-primary rounded-full"></div>
            <p className="text-lg font-medium">{items.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default todos;
