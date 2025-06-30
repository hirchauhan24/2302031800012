
import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1> Contact Us</h1>
      <p>
        You can contact us at <strong>info@example.com</strong> or call <strong>+91-9999999</strong>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default Contact;
