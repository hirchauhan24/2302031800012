
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>🏠 Welcome to the Home Page</h1>
      <p>This is the landing page of our React Router app.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default Home;
