import React, { useState, useEffect } from 'react';
import './Complaint_Student.css'; // 👈 Import the CSS file

const Complaint_Student = () => {
  const [courses, setCourses] = useState([]);
  const [tas, setTAs] = useState([]);
  const [formData, setFormData] = useState({
    coursecode: '',
    taId: [],
    complain: '',
    status: false,
    response: '',
  });

  const studentId = 'dummyStudent123';

  useEffect(() => {
    // Dummy data to simulate backend fetch
    setCourses([
      { _id: 'c1', name: 'Data Structures' },
      { _id: 'c2', name: 'Operating Systems' },
      { _id: 'c3', name: 'Database Systems' },
    ]);
    setTAs([
      { _id: 'ta1', name: 'TA Rohan' },
      { _id: 'ta2', name: 'TA Meera' },
    ]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTASelection = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setFormData((prev) => ({
      ...prev,
      taId: selectedOptions
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      studentId,
      date: new Date(),
    };
    console.log('Complaint Submitted:', payload);
    alert('Complaint submitted successfully (check console)');

    setFormData({
      coursecode: '',
      taId: [],
      complain: '',
      status: false,
      response: '',
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Raise a Complaint</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <div className="form-group">
          <label>Course</label>
          <select
            name="coursecode"
            value={formData.coursecode}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Select TA(s)</label>
          <select
            multiple
            value={formData.taId}
            onChange={handleTASelection}
          >
            {tas.map((ta) => (
              <option key={ta._id} value={ta._id}>
                {ta.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Complaint</label>
          <textarea
            name="complain"
            value={formData.complain}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default Complaint_Student;
