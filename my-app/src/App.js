// import React from "react";
 import Component from "./Component"; // 作成したファイルをインポート
/////////////////////
import React from "react";
 import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
 import GenreSelection from "./GenreSelection";
 import Main from "./Main";
 
 function App() {
   return (
    <div>
      <Component />
    </div>
    //  <Router>
    //    <Routes>
    //      <Route path="/" element={<GenreSelection />} />
    //      <Route path="/main" element={<Main />} />
    //    </Routes>
    //  </Router>
   );
 }
 
 export default App;

