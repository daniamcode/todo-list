import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./index";

test("renders login page by default", () => {
  render(<Home />);
  const loginTitle = screen.getByText(/login/i);
  expect(loginTitle).toBeInTheDocument();
});

test("allows user to login and view task list", () => {
  const fakeToken = "fake-token";
  localStorage.setItem("token", fakeToken);
  render(<Home />);
  const title = screen.getByText(/to do list/i);
  expect(title).toBeInTheDocument();
});

test("allows user to add task", () => {
  const fakeToken = "fake-token";
  localStorage.setItem("token", fakeToken);
  render(<Home />);
  const descriptionInput = screen.getByLabelText(/add a task/i);
  fireEvent.change(descriptionInput, {
      target: { value: "New Task Description" },
    })
  const addButton = screen.getByText(/add task/i);
  fireEvent.click(addButton);
  
  const newTaskDescription = screen.getByText(/new task description/i);
  expect(newTaskDescription).toBeInTheDocument();
});

test("allows user to delete task", () => {
  const fakeToken = "fake-token";
  localStorage.setItem("token", fakeToken);
  render(<Home />);

  //add a task
  const descriptionInput = screen.getByLabelText(/add a task/i);
  fireEvent.change(descriptionInput, {
    target: { value: "New Task Description" },
  })
  const addButton = screen.getByText(/add task/i);
  fireEvent.click(addButton)

  const taskAdded = screen.queryByText(/new task description/i);
  expect(taskAdded).not.toBeNull();
  
  //delete the task    
  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);
  
  const taskDeleted = screen.queryByText(/new task description/i);
  expect(taskDeleted).toBeNull();
});