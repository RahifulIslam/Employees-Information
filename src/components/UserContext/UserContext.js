import React, { createContext } from "react";
import { useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([
    { id: 1, name: "Rahiful", status: "Lunch", outTime: "1.00 pm", inTime: "2.00 pm", purpose:"for lunch"},
    { id: 1, name: "Sezan", status: "Lunch", outTime: "1.00 pm", inTime: "2.00 pm", purpose:"for prayer"},
    { id: 1, name: "Rahiful", status: "Lunch", outTime: "1.00 pm", inTime: "2.00 pm", purpose:"for lunch"},
  ]);

  return(
      <UserContext.Provider value = {[users.setUsers]}>
          {props.children}
      </UserContext.Provider>
  );
}