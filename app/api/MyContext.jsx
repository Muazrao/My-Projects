"use client"
import React, { useState } from 'react'
import { createContext } from "react";

export const MyContext = createContext("");


export default function MyContextProvider({children}) {
    let [name, setName] = useState("Muaz Farooq");
    let [email, setEmail] = useState("muazrao37@gmail.com");
    let [age, setAge] = useState(25);

    const updateDetails = () => {
        setName(name.toUpperCase());
        setEmail(email.toUpperCase());
        setAge("Twenty Five");
    }

  return (
    <div>
      <MyContext.Provider value={{name, email, age, updateDetails}}>
        {children}
      </MyContext.Provider>
    </div>
  )
}

