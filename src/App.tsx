import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainView from "./views/MainView"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<MainView />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
