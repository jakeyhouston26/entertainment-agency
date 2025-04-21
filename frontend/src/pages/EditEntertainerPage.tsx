import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Entertainer } from '../types/Entertainer';

export default function EditEntertainerPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState<Entertainer | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5012/api/entertainers/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load entertainer');
        return res.json();
      })
      .then(data => setForm(data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => prev ? { ...prev, [name]: value } : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;

    const res = await fetch(`http://localhost:5012/api/entertainers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      navigate(`/entertainers/${id}`);
    } else {
      alert('Failed to update entertainer.');
    }
  };

  if (!form) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Edit Entertainer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="entStageName" className="form-label">Stage Name</label>
          <input id="entStageName" name="entStageName" className="form-control" value={form.entStageName} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label htmlFor="entSSN" className="form-label">SSN</label>
          <input id="entSSN" name="entSSN" className="form-control" value={form.entSSN} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label htmlFor="entStreetAddress" className="form-label">Street Address</label>
          <input id="entStreetAddress" name="entStreetAddress" className="form-control" value={form.entStreetAddress} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label htmlFor="entCity" className="form-label">City</label>
          <input id="entCity" name="entCity" className="form-control" value={form.entCity} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label htmlFor="entState" className="form-label">State</label>
          <input id="entState" name="entState" className="form-control" value={form.entState} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label htmlFor="entZipCode" className="form-label">Zip Code</label>
          <input id="entZipCode" name="entZipCode" className="form-control" value={form.entZipCode} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label htmlFor="entPhoneNumber" className="form-label">Phone</label>
          <input id="entPhoneNumber" name="entPhoneNumber" className="form-control" value={form.entPhoneNumber} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label htmlFor="entWebPage" className="form-label">Web Page</label>
          <input id="entWebPage" name="entWebPage" className="form-control" value={form.entWebPage} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label htmlFor="entEMailAddress" className="form-label">Email</label>
          <input id="entEMailAddress" name="entEMailAddress" className="form-control" value={form.entEMailAddress} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label htmlFor="dateEntered" className="form-label">Date Entered</label>
          <input id="dateEntered" name="dateEntered" className="form-control" value={form.dateEntered} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
}
