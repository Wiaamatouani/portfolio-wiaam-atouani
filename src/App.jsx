


import { Routes,Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/About"

function App() {
  return (
    <>
   <Routes>
   <Route path="/" element={<Home />} />
   
   </Routes>
    </>
  );
}

export default App;




