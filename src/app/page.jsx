"use client";
import { useState } from "react";
import Title from "./components/title/title";
import TaskContainer from "./components/taskContainer/taskContainer";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-2 bg-black">
      <div className="bg-white text-center flex-col rounded-md pb-[20px] ">
        <Title />
        <TaskContainer tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
