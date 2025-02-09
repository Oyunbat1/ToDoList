const Footer = function (props) {
  function clearCompleted(task) {
    if (confirm("Are you sure to delete all completed tasks")) {
      props.setTasks(props.tasks.filter((task) => task.isComplete == false));
    }
  }

  return (
    <div className="flex flex-col items-center">
      {props.tasks.length === 0 ? null : (
        <div className="w-[340px] h-[50px] flex justify-center items-center gap-12 mb-[20px]">
          <p>
            {props.tasks.filter((task) => task.isComplete).length} of{" "}
            {props.tasks.length} tasks completed
          </p>
          <button
            onClick={() => clearCompleted(props.tasks)}
            className="text-red-500 font-[500]"
          >
            Clear Completed
          </button>
        </div>
      )}
      <h1 className="text-[14px]">
        Powered by <span className="text-blue-600">Oyunbat</span>
      </h1>
    </div>
  );
};

export default Footer;
