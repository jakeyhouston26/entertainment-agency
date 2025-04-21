import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEntertainers } from '../api/ProjectsAPI';
import { EntertainerSummary } from '../types/EntertainerSummary';

export default function EntertainersPage() {
  const [entertainers, setEntertainers] = useState<EntertainerSummary[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEntertainers()
      .then(data => setEntertainers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Entertainers</h2>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Stage Name</th>
            <th># of Bookings</th>
            <th>Last Booking Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {entertainers.map(e => (
            <tr key={e.entertainerID}>
              <td>{e.entStageName}</td>
              <td>{e.bookingCount}</td>
              <td>{e.lastBookingDate || '—'}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => navigate(`/entertainers/${e.entertainerID}`)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <button
          className="btn btn-success"
          onClick={() => navigate('/entertainers/new')}
        >
          Add Entertainer
        </button>
      </div>
    </div>
  );
}
