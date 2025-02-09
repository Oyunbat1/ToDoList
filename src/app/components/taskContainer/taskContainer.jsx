import Input from "../input/input";

const TaskContainer = function (props) {
  return (
    <div>
      <Input tasks={props.tasks} setTasks={props.setTasks} />
    </div>
  );
};

export default TaskContainer;
