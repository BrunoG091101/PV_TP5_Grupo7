import { Routes, Route } from "react-router-dom";
import Home from './assets/page/Home';
import Layout from "./assets/page/Layout";
import About from "./assets/page/About";
import Juegos from "./assets/page/Juegos";
import Error from "./assets/page/Error";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./assets/page/Contact";
import Proyectos from "./assets/page/Projectos";

function App() {

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/juegos" element={<Juegos/>}/>
          <Route path="/projectos" element={<Proyectos/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </Container>
     
  )
}

export default App
