import { forwardRef } from 'react';
import { createTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

LinkBehavior.displayName = 'LinkBehavior';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

export default theme;
