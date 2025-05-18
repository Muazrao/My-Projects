"use client"

import MyApi from "./load";
import MyContextProvider from "./MyContext";

export default function App () {
    return (
        <>
        <MyContextProvider>
        <MyApi />
        </MyContextProvider>
        </>
    )
}