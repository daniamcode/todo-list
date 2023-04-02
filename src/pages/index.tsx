"use client"
import { useState, useEffect } from "react";
import { Task } from "@/interfaces/common";
import fakeToken from "@/data/fakeData";
import Login from "@/components/Login";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [token, setToken] = useState<string | null>(null);

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

  return (
    <div>
      {!token && (
        <Login 
          handleLogin={handleLogin}
        />
      )}
      {token && (
        <div className="todo">
          <h2>To do list</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Home