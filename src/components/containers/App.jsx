import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "../../pages/Home";

function App() {
  
  return (
    <BrowserRouter>
          <Routes>
            {/* <Route path="/*" element={<NotFount></NotFount>}></Route> */}
            <Route path="/Home" element={<Home></Home>}></Route>
          </Routes>
        </BrowserRouter>
  )
}

export default App
