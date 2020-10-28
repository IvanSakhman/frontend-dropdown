import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchSites } from "../state/actions/dropdown-status";
import dropdownData from "../data/sites.json";
import DropDown from "../components/dropdown";
import "./app.css";

const App = () => {
  const dispatch = useDispatch();
  const fetchAllSites = useCallback((data) => dispatch(fetchSites(data)), []);
  useEffect(() => {
    fetchAllSites(dropdownData);
  }, []);

  return (
    <div className={`app`}>
      <DropDown />
    </div>
  );
};

export default App;
