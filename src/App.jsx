import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import News from "./components/News";
import NavBar from "./components/NavBar";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  
  return (
    <>
      <div className="App">
        <Router>
          <NavBar showSearch={showSearch} setSearch={()=>setShowSearch(!showSearch)}/>
          <div className="w-full">
            
              <Routes>
                <Route path="/" element={<Navigate to="/headlines" />}/>
                <Route path="/headlines" element={<News key="headlines" category="headlines" showSearch={showSearch}/>}/>
                <Route path="/entertainment" element={<News key="entertainment" category="entertainment" showSearch={showSearch}/>}/>
                <Route path="/business" element={<News key="business" category="business" showSearch={showSearch}/>}/>
                <Route path="/sports" element={<News key="sports" category="sports" showSearch={showSearch}/>}/>
                <Route path="/technology" element={<News key="technology" category="technology" showSearch={showSearch}/>}/>
                <Route path="/health" element={<News key="health" category="health" showSearch={showSearch}/>}/>
                <Route path="/science" element={<News key="science" category="science" showSearch={showSearch}/>}/>
                <Route path="/politics" element={<News key="politics" category="politics" showSearch={showSearch}/>}/>
              </Routes>
          </div>
          <Routes>

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
