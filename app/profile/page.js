import { updateProfile } from '../actions';

export default function Profile() {
  return (
    <div className="hero">
      <h1>Account <span className="accent">Settings</span></h1>
      <p>Manage your profile and trading location.</p>
      
      <div className="glass" style={{ maxWidth: '500px', margin: '40px auto', padding: '40px', textAlign: 'left' }}>
        <form action={updateProfile}>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>Full Name</label>
            <input type="text" name="full_name" placeholder="John Doe" required />
          </div>
          
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>City</label>
            <input type="text" name="city" placeholder="New York" required />
          </div>
          
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>State</label>
            <input type="text" name="state" placeholder="NY" required />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
