import React from "react";
import { Routes, Route } from "react-router-dom";
import Tasks from "../taskList";
import CreateTask from "../createTask";
const Layout = () => {
  return (
    <>
      <Routes>
        <Route exact path="/tasks" element={<Tasks />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </>
  );
};

export default Layout;
