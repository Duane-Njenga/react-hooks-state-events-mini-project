import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleFilter(){
    if(selectedCategory === "All")return tasks;
    else{
      return tasks.filter((task) => task.category === selectedCategory)
    }
  }
  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory ={selectedCategory}
      onCategorySelect = {setSelectedCategory}
       />
       
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit ={onTaskFormSubmit}/>
      <TaskList 
      tasks={handleFilter()} 
      onDelete={deleteTask}/>
    </div>
  );
}

export default App;
