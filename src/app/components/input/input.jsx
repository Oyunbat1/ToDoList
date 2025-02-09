"use client";
import { useState } from "react";
import Tabs from "../tabs/tabs";

const Input = function (props) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("All");

  function filterStatus(task) {
    if (status === "All") return true;
    if (status === "Active") return !task.isComplete;
    if (status === "Completed") return task.isComplete;
  }

  const filterTaskByStatus = props.tasks.filter(filterStatus);

  function AddBtn() {
    if (text) {
      const newTask = {
        title: text,
        isComplete: false,
        createdAt: new Date().toISOString(),
      };
      props.setTasks([...props.tasks, newTask]);
      setText("");
    }
  }

  function EditBtn(index) {
    const cloneTask = [...props.tasks];
    const givenValue = prompt("", cloneTask[index].title);
    if (givenValue) {
      cloneTask[index].title = givenValue;
      props.setTasks(cloneTask);
    }
  }

  function DeleteBtn(id) {
    if (confirm("Are you sure?")) {
      props.setTasks(props.tasks.filter((task) => task.createdAt !== id));
    }
  }

  function ToggleElement(index) {
    const cloneTask = [...props.tasks];
    cloneTask[index].isComplete = !cloneTask[index].isComplete;
    props.setTasks(cloneTask);
  }

  function HandleKeyDown(e) {
    if (e.code === "Enter") {
      AddBtn();
    }
  }

  return (
    <div className="pl-[14px] pr-[14px]">
      <div className="flex gap-3">
        <input
          className="border w-[280px] h-[42px] rounded-md pl-[10px]"
          type="text"
          value={text}
          placeholder="Add a new task"
          onKeyDown={HandleKeyDown}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={AddBtn}
          className="bg-blue-600 w-[60px] rounded-md text-white flex items-center justify-center"
        >
          Add
        </button>
      </div>

      {/* Pass status and setStatus to Tabs */}
      <Tabs status={status} setStatus={setStatus} />

      {filterTaskByStatus.map((task, index) => (
        <div
          key={task.createdAt}
          className="w-[352px] h-[50px] bg-[#f2f2f2] rounded-md mt-[10px] mb-[10px] flex items-center justify-around"
        >
          <div
            className={`flex w-[220px] gap-2 pl-[6px] ${
              task.isComplete ? "line-through" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={() => ToggleElement(index)}
            />
            {task.title}
          </div>
          <div className="flex w-[110px] gap-2 pr-[10px]">
            <button
              onClick={() => EditBtn(index)}
              className="bg-blue-400 text-white px-[6px] rounded"
            >
              Edit
            </button>
            <button
              onClick={() => DeleteBtn(task.createdAt)}
              className="bg-red-100 px-[6px] rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <hr className="pt-[20px]" />
    </div>
  );
};

export default Input;
