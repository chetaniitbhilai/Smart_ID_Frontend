import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';
import AttendancePage from './pages/AttendancePage';
import UpcomingClasses from './pages/UpcomingClasses';
import Holidays from './pages/Holidays';
import Complaint_TA from './pages/Complain_TA/Complaint_TA';
import Complaint_Student from './pages/Complain_St/Complaint_Student';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />      {/* Main route */}
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/attendancepage" element={<AttendancePage />} /> 
        <Route path="/upcomingclasses" element={<UpcomingClasses />} />
        <Route path="/holidays" element={<Holidays />} />
         <Route path="/complaint_ta" element={<Complaint_TA />} />
         <Route path="/complaint_student" element={<Complaint_Student/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
