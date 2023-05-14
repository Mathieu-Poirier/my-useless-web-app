import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Button } from "@mui/material";

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  countText: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    margin: "0 10px",
  },
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = async () => {
    try {
      const response = await axios.post("/api/increase");
      setCount(response.data.count);
    } catch (error) {
      console.error("Error increasing count:", error);
    }
  };

  const decreaseCount = async () => {
    try {
      const response = await axios.post("/api/decrease");
      setCount(response.data.count);
    } catch (error) {
      console.error("Error decreasing count:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/count");
        setCount(response.data.count);
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <Typography variant="h1" style={styles.heading}>
        Counter
      </Typography>
      <Typography variant="body1" style={styles.countText}>
        Count: {count}
      </Typography>
      <div style={styles.buttonContainer}>
        <Button
          variant="contained"
          onClick={increaseCount}
          style={styles.button}
        >
          Increase
        </Button>
        <Button
          variant="contained"
          onClick={decreaseCount}
          style={styles.button}
        >
          Decrease
        </Button>
      </div>
    </div>
  );
};

export default Counter;
