import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Chatbot from "./Chatbot";



function App() {
  return (
    <>

       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/R3F_test' element={<Home />}> </Route>y
          <Route path='/shop' element={<Shop />}> </Route>
        </Routes>
      </BrowserRouter> 

      <Chatbot />
    </>
  );
}

export default App;