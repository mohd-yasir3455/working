import React, { useState, useEffect } from "react";

const apiUrl = "http://localhost:5000/health"; // Backend URL
//trial to understand the backend call and how sever handles the calls 
export default function HealthCheck() {
  const [healthMessage, setHealthMessage] = useState(""); // State to store the message

  useEffect(() => {
    const fetchHealthMessage = async () => {
      try {
        const response = await fetch(apiUrl); // Fetch data from backend
        const data = await response.text(); // Read response as text
        setHealthMessage(data); // Update state with message
      } catch (error) {
        console.error("Error fetching health message:", error);
        setHealthMessage("Error connecting to the server.");
      }
    };

    fetchHealthMessage();
  }, []);

  return (
    <div>
      <h1>Health Check</h1>
      <p>{healthMessage}</p>
    </div>
  );
}
