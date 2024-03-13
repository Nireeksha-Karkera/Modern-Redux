import "react-toastify/dist/ReactToastify.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css"
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import './index.css'
import Home from "./pages/Home";
import AddEditBlog from "./pages/AddEditBlog";
import Detail from "./pages/Detail";


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<AddEditBlog />} />
          <Route path="/update/:id" element={<AddEditBlog />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
