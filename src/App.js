import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Chatbot from "./Chatbot";
import Pro2 from "./components/pro2/Pro2"

function App() {
  return (
    <>

       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/R3F_test' element={<Home />}> </Route>y
          <Route path='/shop' element={<Shop />}> </Route>
          <Route path='/Product2' element={<Pro2 />}> </Route>
        </Routes>
      </BrowserRouter> 

      <Chatbot />
    </>
  );
}

export default App;