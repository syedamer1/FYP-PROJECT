import  { useState ,startTransition} from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

function LoginForm () {
  const [email, setEmail] = useState('amirali@gmail.com');
  const [password, setPassword] = useState('qwerty');
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const navigate = useNavigate();

  const isValidEmail = (email=true) => {
    return email;
  };

  const isValidPassword = (password) => {
    password=true;
    return password;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    setSubmitError(null);
  
      navigate('/dashboard/');
  } catch (err) {
    setSubmitError(err.message);
  }
};
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email-login">Email Address</InputLabel>
              <OutlinedInput
                id="email-login"
                type="email"
                value={email}
                name="email"
                onChange={handleInputChange}
                placeholder="Enter email address"
                fullWidth
                error={Boolean(email && !isValidEmail(email))}
              />
              {email && !isValidEmail(email) && (
                <FormHelperText error>Your email is not valid</FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="password-login">Password</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(password && !isValidPassword(password))}
                id="password-login"
                type={showPassword ? 'text' : 'password'}
                value={password}
                name="password"
                onChange={handleInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter password"
              />
              {password && !isValidPassword(password) && (
                <FormHelperText error>Your password is not valid</FormHelperText>
              )}
            </Stack>
          </Grid>

          <Grid item xs={12} sx={{ mt: -1 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    color="primary"
                    size="small"
                  />
                }
                label={<Typography variant="h6">Keep me sign in</Typography>}
              />
              <Link variant="h6" component={RouterLink} to="" color="text.primary">
                Forgot Password?
              </Link>
            </Stack>
          </Grid>
          {submitError && (
            <Grid item xs={12}>
              <FormHelperText error>{submitError}</FormHelperText>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              disableElevation
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default LoginForm;