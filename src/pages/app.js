/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import React from 'react';
// material
import DropDown from '../material/dropdown/dropdown';
// utils
//SITE DATA
import { sites } from '../utils/data';
// styles
import './app.css';



/* ========== ~~~~~~~~~~ APP ~~~~~~~~~~ ========== */
const App = (props) => {
  return (
    <div className={`app`}>
      <DropDown />
    </div>
  )
};



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default App;
