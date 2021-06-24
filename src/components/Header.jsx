import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Header = ({ title }) => (
  <>
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} align="center">
      <Button variant="outlined" size="small" href="/newpost">Nova Publicação</Button>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        { }
      </Typography>
      <Button size="small" style={{ float: 'right' }}>
        Usuário Logado
      </Button>
    </Toolbar>
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        {title}
      </Typography>
    </Toolbar>
  </>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
