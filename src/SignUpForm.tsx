import React, { useState } from 'react';
import { Box, TextField, Button, CircularProgress, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    if (password !== confirmPassword) {
      setLoading(false);
      setError('Passwords do not match');
      return;
    }

    setTimeout(() => {
      setLoading(false);
      if (email.includes('@') && password.length >= 6) {
        // Save data to localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert(`Account created for: ${email}`);
        navigate('/?'); // Redirect to login page
      } else {
        setError('Invalid email or password must be at least 6 characters');
      }
    }, 2000);
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSignUp}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'white',
        }}
      >
        {/* Added motivational or guiding text */}
        <Typography
        fontWeight="bold"
          variant="h6"
          textAlign="center"
          color="#1d1e2b"
          mb={2}
        >
          Silahkan buat akun terlebih dahulu.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          margin="normal"
        />
        {error && <Typography color="error" variant="body2">{error}</Typography>}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ marginTop: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
        </Button>
      </Box>
      {/* Copyright positioned at the bottom-left */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0, // Tetap di kiri bawah
          textAlign: 'center',
          backgroundColor: '#ffffff',
          py: 1,
          px: 3,
          boxShadow: '0px -2px 6px rgba(0, 0, 0, 0.0)',
          width: '46vw', // Menggunakan 50% dari lebar viewport
        }}
      >
        <Typography variant="body2" color="#000000">
          © {new Date().getFullYear()} Muse Academy. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUpForm;
