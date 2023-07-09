import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainView from "./views/MainView";
import FloatingBar from "./components/FloatingBar";
import AboutMe from "./views/AboutMe";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <FloatingBar textList={["Main page", "Workshop", "About me"]} />
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
