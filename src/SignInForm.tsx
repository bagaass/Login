import React, { useState } from 'react';
import { Box, TextField, Button, CircularProgress, Typography } from '@mui/material';

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (email === 'test@example.com' && password === 'password123') {
        alert(`Logged in as: ${email}`);
      } else {
        setError('Invalid email or password');
      }
    }, 2000);
  };

  return (
    <Box component="form" onSubmit={handleSignIn}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        error={!!error}
        helperText={error && "Please enter a valid email and password"}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        error={!!error}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          py: 1.5,
          backgroundColor: '#4CAF50',
          '&:hover': { backgroundColor: '#45A049' },
        }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
      </Button>
    </Box>
  );
};

export default SignInForm;
