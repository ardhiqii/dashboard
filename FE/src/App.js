import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Perusahaan } from "./pages/Perusahaan";
import './App.css';
import { Topbar } from "./components/topbar/Topbar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/perusahaan" element={<Perusahaan />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
