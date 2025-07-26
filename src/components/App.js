import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  //  Filter tasks based on selected category
  const tasksToDisplay = tasks.filter((task) =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );

  // Delete a task
  function handleDelete(deletedTaskText) {
    const updatedTasks = tasks.filter((task) => task.text !== deletedTaskText);
    setTasks(updatedTasks);
  }

  
  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDelete} />
    </div>
  );
}

export default App;
