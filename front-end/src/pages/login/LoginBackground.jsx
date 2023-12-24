import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

export default function LoginBackground() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'absolute',
        filter: 'blur(18px)',
        zIndex: -1,
        bottom: 0,
        width: '100%',
        height: 'calc(100vh - 175px)',
        backgroundColor: theme.palette.common.white,
      }}
    />
  );
}
