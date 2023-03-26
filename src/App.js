import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentListing from "./StudentListing";
import StudentCreate from "./StudentCreate";
import StudentDetail from "./StudentDetail";
import StudentUpdate from "./StudentUpdate";






function App() {
  return (
    <div className="App">
      <h1>React Js CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentListing />}></Route>
          <Route path="/create" element={<StudentCreate />}></Route>
          <Route path='/detail/:id' element={<StudentDetail />}></Route>
          <Route path='/edit/:sid' element={<StudentUpdate />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
