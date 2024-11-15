import React, { useState } from 'react';
import { Box, TextField, Button, CircularProgress, Typography } from '@mui/material';


const SignUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (email.includes('@') && password.length >= 6) {
        alert(`Account created for: ${name} (${email})`);
      } else {
        setError('Invalid email or password must be at least 6 characters');
      }
    }, 2000);
  };

  return (
    <Box component="form" onSubmit={handleSignUp}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        error={!!error}
        helperText={error && "Please enter a valid email"}
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
        helperText={error && "Password must be at least 6 characters"}
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
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
      </Button>
    </Box>
  );
};

export default SignUpForm;
