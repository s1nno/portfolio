import React from 'react';

const EmailButton = () => {
  const email = 'haydensandler1@gmail.com';
  const subject = 'Inquiry from Website'; // Default subject
  const body = 'Hello, I have a question about...'; // Default body content

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* "Contact Me" Text with Gradient */}
      <h1
        style={{
          fontSize: '48px',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, red, orange)', // Red to orange gradient
          WebkitBackgroundClip: 'text', // Clip the background to the text
          color: 'transparent', // Make the text color transparent to show gradient
        }}
      >
        Contact Me
      </h1>
      
      <a
        href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
        style={{ textDecoration: 'none' }}
      >
        <button
          style={{
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            width: '200px',
            background: 'linear-gradient(to right, red, orange)', // Red to orange gradient
            boxShadow: 'inset 0 0 0 1px white', // Inner white border
            marginTop: '20px', // Space between text and button
          }}
        >
          Send Email
        </button>
      </a>
    </div>
  );
};

export default EmailButton;
