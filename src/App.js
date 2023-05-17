import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import Login from "./pages/Login";
import Cursos from "./pages/Cursos";
import Inicio from "./pages/Inicio";
import Empleos from "./pages/Empleos";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="Contenedor">
      <BrowserRouter>
        <ChakraProvider>
          {/* header */}
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/usuarios" element={<Usuarios />}></Route>
            <Route path="/cursos" element={<Cursos />}></Route>
            <Route path="/inicio" element={<Inicio />}></Route>
            <Route path="/empleos" element={<Empleos />}></Route>
          </Routes>
          {/* footer */}
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
