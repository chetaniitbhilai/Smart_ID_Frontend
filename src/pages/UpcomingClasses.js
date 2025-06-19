import React, { useState, useEffect } from 'react';
import UpcomingClassesComponent from '../Components/upcomingClassesComponent';

const UpcomingClasses = () => {
  const [upcomingclassesData, setUpcomingClassesData] = useState([]);

 useEffect(() => {
  const fetchCourses = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/course/get_courses?userId=${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch courses');
      }

      const formattedCourses = data.map((course, index) => ({
        date: `Tuesday ${21 + index}th Jan' 2025`,
        timeSlot: '12:30 - 1:25 PM',
        location: 'L101',
        subject: `${course.courseName} (${course.courseCode})`,
        subjectColor: '#FFA500',
      }));

      setUpcomingClassesData(formattedCourses);
    } catch (error) {
      console.error('Error fetching course data:', error);
    }
  };

  fetchCourses();
}, []);


  return (
    <div className="attendance-container">
      <UpcomingClassesComponent attendanceData={upcomingclassesData} />
    </div>
  );
};

export default UpcomingClasses;
