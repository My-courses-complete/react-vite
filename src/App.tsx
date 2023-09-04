import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
