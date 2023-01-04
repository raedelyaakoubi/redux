import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Edit from "./components/Edit/Edit";

const App = () => {
 
  return (
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/Edit/:id" element={<Edit/>}></Route>
</Routes>
    
      
    
  );
};

export default App;