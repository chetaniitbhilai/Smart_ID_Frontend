import React, { useState, useEffect } from 'react';
import './Complaint_TA.css';

const Complaint_TA = () => {
  const [complaints, setComplaints] = useState([]);
  const [responseMap, setResponseMap] = useState({});
  const taId = 'dummyTA123';

  useEffect(() => {
    const dummyComplaints = [
      {
        _id: '1',
        coursecode: { name: 'Data Structures' },
        studentId: { name: 'Bhoomi Goyal' },
        date: new Date(),
        complain: 'The TA didn’t check assignment properly.',
        status: false,
        response: ''
      },
      {
        _id: '2',
        coursecode: { name: 'Operating Systems' },
        studentId: { name: 'Rahul Verma' },
        date: new Date(),
        complain: 'Lab was marked absent despite attendance.',
        status: true,
        response: 'We have updated your attendance. Sorry for the issue.'
      }
    ];
    setComplaints(dummyComplaints);
  }, []);

  const handleResponseChange = (id, value) => {
    setResponseMap((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitResponse = (complaintId) => {
    const response = responseMap[complaintId];
    if (!response || response.trim() === '') {
      alert('Please write a response before submitting.');
      return;
    }

    setComplaints((prev) =>
      prev.map((c) =>
        c._id === complaintId
          ? { ...c, response: responseMap[complaintId], status: true }
          : c
      )
    );
    alert('Response submitted successfully');
  };

  return (
    <div className="container">
      <h2 className="heading">Complaints Assigned to You</h2>
      {complaints.length === 0 ? (
        <p className="text-center text-gray-500">No complaints assigned.</p>
      ) : (
        complaints.map((complaint) => (
          <div key={complaint._id} className="card">
            <p>
              <span className="label">Course:</span> {complaint.coursecode?.name || 'N/A'}
            </p>
            <p>
              <span className="label">Student:</span> {complaint.studentId?.name || 'N/A'}
            </p>
            <p>
              <span className="label">Date:</span> {new Date(complaint.date).toLocaleDateString()}
            </p>
            <p>
              <span className="label">Complaint:</span> {complaint.complain}
            </p>
            <p>
              <span className="label">Status:</span>{' '}
              <span className="status">{complaint.status ? 'Resolved ✅' : 'Pending ❌'}</span>
            </p>

            {!complaint.status && (
              <>
                <textarea
                  className="textarea"
                  placeholder="Write your response..."
                  value={responseMap[complaint._id] || ''}
                  onChange={(e) => handleResponseChange(complaint._id, e.target.value)}
                />
                <button
                  className="button"
                  onClick={() => handleSubmitResponse(complaint._id)}
                >
                  Submit Response
                </button>
              </>
            )}

            {complaint.status && complaint.response && (
              <div className="response-box">
                <strong>Your Response:</strong>
                <p>{complaint.response}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Complaint_TA;
