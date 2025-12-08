import React, { useState, useEffect } from "react";
import taskApi from "../../../api/taskApi"; // adjust path


// Theme colors per mode
const modeStyles = {
  pomodoro: {
    taskBg: "bg-[#17335E]",
    buttonBg: "bg-[#234269]",
    buttonHover: "hover:bg-[#284A77]",
    ringFocus: "focus:ring-[#3A7BCE]",
    textColor: "text-[#D8EAFF]",
    doneBg: "bg-[#0f1f3d]",
    doneText: "text-gray-400",
    doneButtonBg: "bg-[#243C59]",
    doneButtonHover: "hover:bg-[#3A4C88]",
    undoButtonBg: "bg-[#123D72]",
    undoButtonHover: "hover:bg-[#3A4C88]",
  },
  short: {
    taskBg: "bg-[#306747]",
    buttonBg: "bg-[#4DA45F]",
    buttonHover: "hover:bg-[#367550]",
    ringFocus: "focus:ring-[#5FCE8D]",
    textColor: "text-[#CDF3D5]",
    doneBg: "bg-[#1a3f2b]",
    doneText: "text-gray-300",
    doneButtonBg: "bg-[#489466]",
    doneButtonHover: "hover:bg-[#4DA45F]",
    undoButtonBg: "bg-[#367550]",
    undoButtonHover: "hover:bg-[#4DA45F]",
  },
  long: {
    taskBg: "bg-[#CEBD5F]",
    buttonBg: "bg-[#675F30]",
    buttonHover: "hover:bg-[#756B36]",
    ringFocus: "focus:ring-[#F9ECA0]",
    textColor: "text-[#F9ECA0]",
    doneBg: "bg-[#655E2F]",
    doneText: "text-gray-800",
    doneButtonBg: "bg-[#756B36]",
    doneButtonHover: "hover:bg-[#867844]",
    undoButtonBg: "bg-[#756B36]",
    undoButtonHover: "hover:bg-[#867844]",
  },
};

const Task = ({ activeMode }) => {
    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState([]);

    // Load tasks on mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await taskApi.getAllTasks();
        if (response.data.success && response.data.data) {
          setTasks(response.data.data);
        }
      } catch (err) {
        console.error("Fetch tasks error:", err.response?.data || err.message);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (!taskText.trim()) return;

    try {
      const response = await taskApi.addTask({ title: taskText });
      console.log("Task added response:", response.data);

      if (response.data.success && response.data.data) {
        // Add returned task to local state
        setTasks([response.data.data, ...tasks]);
        setTaskText("");
      }
    } catch (err) {
      console.error("Add task error:", err.response?.data || err.message);
    }
  };


  const handleDone = async (taskId, isCompleted) => {
    try {
      const response = await taskApi.updateTask(taskId, { isCompleted: !isCompleted });
      if (response.data.success && response.data.data) {
        setTasks(tasks.map(t => (t.id === taskId ? response.data.data : t)));
      }
    } catch (err) {
      console.error("Update task error:", err.response?.data || err.message);
    }
  };


  const handleDiscard = async (taskId) => {
    try {
      await taskApi.deleteTask(taskId);
      setTasks(tasks.filter(t => t.id !== taskId));
    } catch (err) {
      console.error("Delete task error:", err.response?.data || err.message);
    }
  };

  return (
    <div className={`w-full max-w-lg p-5 rounded-xl shadow-lg transition-all duration-300 ${modeStyles[activeMode].taskBg}`}>
      <h2 className={`text-xl font-bold mb-4 ${modeStyles[activeMode].textColor}`}>
        Your Tasks
      </h2>

      {/* Task list */}
      <div className="space-y-3 mb-5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-between items-center p-3 rounded-lg transition-all duration-300 ${
              task.isCompleted ? modeStyles[activeMode].doneBg : "bg-black/20"
            }`}
          >
            <span
              className={`text-lg ${
                task.isCompleted
                  ? `${modeStyles[activeMode].doneText} line-through`
                  : modeStyles[activeMode].textColor
              }`}
            >
              {task.title}
            </span>

            <div className="flex space-x-2 w-48">
              {/* DONE / UNDO BUTTON */}
              <button
                onClick={() => handleDone(task.id, task.isCompleted)}
                className={`flex-1 px-3 py-2 rounded-md text-white transition-all duration-200 ${
                  task.isCompleted
                    ? `${modeStyles[activeMode].undoButtonBg} ${modeStyles[activeMode].undoButtonHover}`
                    : `${modeStyles[activeMode].doneButtonBg} ${modeStyles[activeMode].doneButtonHover}`
                }`}
              >
                {task.isCompleted ? "Undo" : "Done"}
              </button>

              {/* DISCARD BUTTON */}
              <button
                onClick={() => handleDiscard(task.id)}
                className="flex-1 px-3 py-2 rounded-md bg-[#A31F21] hover:bg-red-700 text-white"
              >
                Discard
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Input + Save button */}
      <div className="flex gap-3 w-full">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="What are you working on?"
          className={`flex-1 p-3 rounded-lg bg-black/20 text-white focus:outline-none focus:ring-2 ${modeStyles[activeMode].ringFocus}`}
        />

        <button
          onClick={handleAddTask}
          className={`${modeStyles[activeMode].buttonBg} ${modeStyles[activeMode].buttonHover} px-4 py-2 rounded-lg text-white`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Task;

