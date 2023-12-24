import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import CustomCard from '../../components/MainCard';


const LoginCard = ({ children, ...other }) => (
  <CustomCard
    sx={{
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%'
      }
    }}
    content={false}
    {...other}
    border={false}
    boxShadow
  >
    <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
  </CustomCard>
);

LoginCard.propTypes = {
  children: PropTypes.node
};

export default LoginCard;
