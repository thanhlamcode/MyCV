import "./App.css";
import AllRoutes from "./AllRoutes";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <AllRoutes />
    </ThemeProvider>
  );
}

export default App;
