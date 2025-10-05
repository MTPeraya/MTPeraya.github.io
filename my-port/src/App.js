import React from "react";
import {useDarkMode}  from "./useDarkMode";
import "./index.css";
import { BubbleMenuComponent } from './components/BubbleMenu';


function App() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <>
    <BubbleMenuComponent />
    </>
  );
}

export default App;
