import '@fontsource/caveat';
import { Typography } from '@mui/material';

const styles = {
  logo: {
    fontFamily: 'Caveat',
    padding: '1.5rem',
    color: '#422d69',
  },
};

function Logo() {
  return (
    <Typography variant='h4' style={styles.logo}>
      What's that dog?
    </Typography>
  );
}

export default Logo;
