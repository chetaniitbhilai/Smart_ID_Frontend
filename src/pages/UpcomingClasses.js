import React, { useState, useEffect } from 'react';
import UpcomingClassesComponent from '../Components/upcomingClassesComponent';

const UpcomingClasses = () => {
  // This is sample data - in a real app, this would come from your API/backend
  const [upcomingclassesData, setUpcomingClassesData] = useState([
    {
      date: 'Tuesday 21th Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
    },
    {
      date: 'Tuesday 21th Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
    },
    {
      date: 'Tuesday 21th Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
    },
    {
      date: 'Tuesday 22nd Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
    },
    {
      date: 'Tuesday 22nd Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
    },
    {
      date: 'Tuesday 22nd Jan\' 2025',
      timeSlot: '12:30 - 1:25 PM',
      location: 'L101',
      subject: 'Graph Theory',
      subjectColor: '#FFA500',
    }
  ]);
  
  // In a real application, you would fetch data from your backend and fetch only those entries whose date is from the present day
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
      <UpcomingClassesComponent attendanceData={upcomingclassesData} />
    </div>
  );
};

export default UpcomingClasses;