import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
