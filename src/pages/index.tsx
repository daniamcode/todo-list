"use client"
import { useState, useEffect } from "react";
import styles from "../styles/index.module.scss";
import { Task } from "@/interfaces/common";
import fakeToken from "@/data/fakeData";
import TaskList from "@/components/TaskList";
import Form from "@/components/Form";
import Login from "@/components/Login";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState<string>('');
  const [token, setToken] = useState<string | null>(null);
  const [mode, setMode] = useState<string>('add');
  const [taskToUpdate, setTaskToUpdate] = useState<number | null>(null);

  useEffect(() => {
    const tokenResponse = localStorage.getItem('token')
    if(tokenResponse) setToken(tokenResponse)
  }, [])

  const handleLogin = () => {
    localStorage.setItem("token", fakeToken);
    setToken(fakeToken)
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTasks([])
    setToken(null)
  };

  const handleSubmitTask = () => {
    if(mode === 'add') {
      const newTask: Task = {
        id: Date.now(),
        description: text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setText('');
    }
    if(mode === 'update') {
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskToUpdate) {
          return { ...task, description: text };
        }
        return task;
      });
      setTasks(updatedTasks);
      setMode('add')
      setText('');
    }
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleUpdateTaskStatus = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleUpdateTask = (taskId: number) => {
    setMode('update')
    setTaskToUpdate(taskId)

    const taskIndex = tasks.findIndex(task => task.id === taskId)
    setText(tasks[taskIndex].description)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(text.length > 0) handleSubmitTask();
  };

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.container}>
      {!token && (
        <Login 
          handleLogin={handleLogin}
        />
      )}
      {token && (
        <div className="todo">
          <h2>To do list</h2>
          <Form 
            handleSubmit={handleSubmit}
            handleTaskChange={handleTaskChange}
            mode={mode}
            text={text}
          />
          {tasks.length > 0 ? (
            <TaskList 
            tasks={tasks} 
            onUpdateTaskStatus={handleUpdateTaskStatus} 
            onDeleteTask={handleDeleteTask} 
            onUpdateTask={handleUpdateTask}
            />
          ) : (
            <p>No tasks found</p>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Home