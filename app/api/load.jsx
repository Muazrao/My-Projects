"use client";

import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";


const Header = () => {
  return (
    <>
      <h1 className="ml-4  mt-2 mb-2 text-2xl font-bold">Users List</h1>
      <hr />
    </>
  );
};

const Footer = () => {
  return (
    <>
        <hr />
      <h1 className="mt-3 ml-4 text-xl">
        <b>This is the footer of my app</b>
      </h1>
    </>
  );
};

function Content() {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (res.ok) {
          let data = await res.json();
          setApiData(data);
        } else {
          throw new Error("Invalid response from server");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading ... </h1>;
  else if (error) return <h1>{error}</h1>;
  else
    return (
      <>
        <div className="mt-3 ml-4">
          {apiData.map((user) => (
            <div key={user.id}>
              <h1>
                <b>Name:</b> {user.name}
              </h1>
              <h1>
                <b>Email:</b> {user.email}
              </h1>
            </div>
          ))}
        </div>
      </>
    );
}

function MyApi() {
  const {name, age, email, updateDetails} = useContext(MyContext);

  return (
    <>
      <Header />
      <Content />
      <Footer />

      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Age: {age}</h1>
      <button onClick={updateDetails}> Update Details </button>
    </>
  );
}

export default MyApi;
