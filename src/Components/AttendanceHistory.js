import React from 'react';
import { 
  IoChevronBackOutline, 
  IoHomeOutline, 
  IoDocumentTextOutline, 
  IoIdCardOutline, 
  IoNotificationsOutline, 
  IoPersonOutline 
} from 'react-icons/io5';
import './AttendanceHistory.css';

const AttendanceHistory = ({ attendanceData }) => {
  // Group attendance records by date
  const groupByDate = (data) => {
    const grouped = {};
    
    data.forEach(record => {
      const date = record.date;
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(record);
    });
    
    return grouped;
  };

  const groupedAttendance = groupByDate(attendanceData || []);

  return (
    <div className="attendance-history-page">
      <div className="attendance-header">
        {/* <button className="back-button">
          <IoChevronBackOutline />
        </button> */}
        <h1>Attendance History</h1>
      </div>

      <div className="attendance-content">
        {Object.keys(groupedAttendance).map(date => (
          <div key={date} className="date-section">
            <div className="date-header">
              <span>{date}</span>
              <div className="calendar-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="16" height="15" rx="2" stroke="#6c5ce7" strokeWidth="1.5"/>
                  <path d="M2 7H18" stroke="#6c5ce7" strokeWidth="1.5"/>
                  <path d="M6 3V5" stroke="#6c5ce7" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 3V5" stroke="#6c5ce7" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {groupedAttendance[date].map((record, index) => (
              <div key={index} className="attendance-card">
                <div className="attendance-details">
                  <div className="attendance-time">{record.timeSlot}</div>
                  <div className="attendance-location">{record.location}</div>
                  <div className="attendance-subject">
                    <div className="subject-dot" style={{ backgroundColor: record.subjectColor || '#FFA500' }}></div>
                    <span>{record.subject}</span>
                  </div>
                </div>
                <div className={`attendance-status ${record.status.toLowerCase()}`}>
                  {record.status}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="bottom-nav">
        <button className="nav-button active">
          <IoHomeOutline />
        </button>
        <button className="nav-button">
          <IoDocumentTextOutline />
        </button>
        <button className="nav-button">
          <IoIdCardOutline />
        </button>
        <button className="nav-button">
          <IoNotificationsOutline />
        </button>
        <button className="nav-button">
          <IoPersonOutline />
        </button>
      </div>
    </div>
  );
};

export default AttendanceHistory;