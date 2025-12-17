import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registesr" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>

<Route
  path="/create-event"
  element={
    <PrivateRoute>
      <CreateEvent />
    </PrivateRoute>
  }
/>

<Route
  path="/events"
  element={
    <PrivateRoute>
      <Events />
    </PrivateRoute>
  }
/>
    </Routes>
  );
}

export default App;