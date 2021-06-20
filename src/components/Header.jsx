import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

function Header({ title }) {
  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Button variant="contained" size="small" href="/newpost">Nova Publicação</Button>
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
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Button variant="outlined" size="small">
        Sign up
      </Button>
    </Toolbar>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
