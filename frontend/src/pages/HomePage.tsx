export default function HomePage() {
    const heroStyle: React.CSSProperties = {
      backgroundImage: "url('https://images.unsplash.com/photo-1683304554885-656332c636a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW50ZXJ0YWluZXIlMjB3ZWJzaXRlfGVufDB8fDB8fHww')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      position: 'relative',
      color: 'white',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const overlayStyle: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.55)',
      zIndex: 1,
    };
  
    const contentStyle: React.CSSProperties = {
      zIndex: 2,
      position: 'relative',
      maxWidth: '600px',
      padding: '2rem',
    };
  
    return (
      <div style={heroStyle}>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
          <h1 className="display-4 fw-bold">Entertainment Agency</h1>
          <p className="lead">Discover top talent. Book unforgettable shows.</p>
          <a href="#/entertainers" className="btn btn-primary btn-lg mt-3">
            View Entertainers
          </a>
        </div>
      </div>
    );
  }
  