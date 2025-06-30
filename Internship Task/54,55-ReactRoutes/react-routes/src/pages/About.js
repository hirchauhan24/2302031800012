
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1>ℹ️ About Us</h1>
      <p>
        This page shares information about our project. We are using React Router to handle navigation in a single-page app.
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

export default About;
