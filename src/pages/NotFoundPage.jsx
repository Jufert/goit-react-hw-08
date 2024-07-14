import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const NotFoundPage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return clearInterval(intervalId);
  }, []);

  if (timer === 5) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <h1>This page does not exist.</h1>
      <p>You will be redirected to Home in {5 - timer} seconds </p>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default NotFoundPage;