import PropTypes from 'prop-types';
import { Box, Grid, Container, Typography } from '@mui/material';
import LoginCard from './LoginCard';
import LoginBackground from './LoginBackground';

const LoginWrapper = ({ children }) => {
  return (
    <>
      <Box sx={{ minHeight: '100vh' }}>
        <LoginBackground />
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          sx={{
            minHeight: '100vh'
          }}
        >
          <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
            <Typography variant="h4" color="black">
              Logo
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
            >
              <Grid item>
                <LoginCard>{children}</LoginCard>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
            <Container maxWidth="xl"></Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

LoginWrapper.propTypes = {
  children: PropTypes.node
};

export default LoginWrapper;
