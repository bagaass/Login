import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './AuthForm';
import SignUpForm from './SignUpForm';


const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Routes>
          {/* Rute untuk halaman login */}
          <Route
            path="/"
            element={
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#1a1a1a',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AuthForm />
              </div>
            }
          />

          {/* Rute untuk halaman sign up */}
          <Route
            path="/signup"
            element={
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#ffff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <SignUpForm />
              </div>
            }
          />
        </Routes>

        <div
          style={{
            flex: 1,
            backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20240603/pngtree-cloud-computing-concept-connect-devices-to-cloud-image_15739073.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </Router>
  );
};

export default App;
