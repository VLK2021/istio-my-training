import {Route, Routes} from "react-router-dom";

import Layout from "./Layout/Layout";
import Maine from "./pages/Maine/Maine";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Maine/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
