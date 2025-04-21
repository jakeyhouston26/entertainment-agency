import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Entertainer } from '../types/Entertainer';

export default function EntertainerDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entertainer, setEntertainer] = useState<Entertainer | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5012/api/entertainers/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch entertainer');
        return res.json();
      })
      .then(data => setEntertainer(data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this entertainer?');
    if (!confirm) return;

    const res = await fetch(`http://localhost:5012/api/entertainers/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      navigate('/entertainers');
    } else {
      alert('Failed to delete entertainer.');
    }
  };

  if (!entertainer) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{entertainer.entStageName}</h2>

      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>SSN</th>
            <td>{entertainer.entSSN}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>
              {entertainer.entStreetAddress}, {entertainer.entCity}, {entertainer.entState} {entertainer.entZipCode}
            </td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{entertainer.entPhoneNumber}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{entertainer.entEMailAddress}</td>
          </tr>
          <tr>
            <th>Web Page</th>
            <td>
              <a href={entertainer.entWebPage} target="_blank" rel="noreferrer">
                {entertainer.entWebPage}
              </a>
            </td>
          </tr>
          <tr>
            <th>Date Entered</th>
            <td>{entertainer.dateEntered}</td>
          </tr>
        </tbody>
      </table>

      <div className="d-flex gap-2">
        <button className="btn btn-secondary" onClick={() => navigate(`/entertainers/${id}/edit`)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

