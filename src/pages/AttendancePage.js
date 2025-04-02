import React, { useState, useEffect } from 'react';
import AttendanceHistory from '../Components/AttendanceHistory';

const AttendancePage = () => {
  // This is sample data - in a real app, this would come from your API/backend
  const [attendanceData, setAttendanceData] = useState([
    {
      date: 'Tuesday 21th Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
      status: 'ABSENT'
    },
    {
      date: 'Tuesday 21th Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
      status: 'PRESENT'
    },
    {
      date: 'Tuesday 21th Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
      status: 'ABSENT'
    },
    {
      date: 'Tuesday 22nd Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
      status: 'PRESENT'
    },
    {
      date: 'Tuesday 22nd Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
      status: 'PRESENT'
    },
    {
      date: 'Tuesday 22nd Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
      status: 'PRESENT'
    }
  ]);
  
  // In a real application, you would fetch data from your backend
  // This is just a placeholder for how you might do that
  /*
  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('/api/attendance-history')
      .then(response => response.json())
      .then(data => setAttendanceData(data))
      .catch(error => console.error('Error fetching attendance data:', error));
  }, []);
  */

  return (
    <div className="attendance-container">
      <AttendanceHistory attendanceData={attendanceData} />
    </div>
  );
};

export default AttendancePage;