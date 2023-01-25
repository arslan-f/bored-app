import './App.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Start from './Start';
import ActivitySelection from './ActivitySelection';
import ActivityInformation from './ActivityInformation';
import NotBored from './NotBored';

function App() {
  const [activityData, setActivityData] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(()=>{
    if(isFetching){
      fetch('http://www.boredapi.com/api/activity/')
  .then((response) => response.json())
  .then((data) => setActivityData(data));
  console.log(activityData)
  setIsFetching(false)
    }
    
    
  }, [isFetching])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/not_bored" element={<NotBored/>} />
        <Route path="/activity_selection" element={<ActivitySelection setIsFetching={setIsFetching}/>} />
        <Route path="/activity_information" element={<ActivityInformation activityData={activityData} setIsFetching={setIsFetching} />} />
      </Routes>
    </div>
  );
}

export default App;
