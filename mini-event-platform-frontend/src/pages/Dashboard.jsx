import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Dashboard</h1>
      <p>You are logged in 🎉</p>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
        <button onClick={() => navigate("/events")}>View Events</button>
        <button onClick={() => navigate("/create-event")}>Create Event</button>
    </div>
  );
};

export default Dashboard;