import { Routes, Route } from "react-router-dom";

import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<AllNotifications />}
      />

      <Route
        path="/priority"
        element={<PriorityNotifications />}
      />
    </Routes>
  );
}

export default App;