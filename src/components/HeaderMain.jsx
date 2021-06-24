import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { useMediaQuery } from 'react-responsive';
import Typography from '@material-ui/core/Typography';
import PersistentDrawerLeft from './PersistentDrawerLeft';

function HeaderMain({ posts }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' });
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} align="center">
        {isTabletOrMobile
          ? (
            <IconButton color="inherit" edge="start" href="/newpost">
              <AddIcon
                variant="outlined"
                size="small"
                href="/newpost"
              />
            </IconButton>
          )
          : <Button variant="outlined" size="small" href="/newpost">Nova Publicação</Button>}
        <Typography component="h2" variant="h5" color="inherit" align="center" noWrap sx={{ flex: 1 }}>
          { }
        </Typography>
        <Button size="small" style={{ float: 'right' }}>
          Usuário Logado
        </Button>
      </Toolbar>
      <PersistentDrawerLeft posts={posts} />
    </>
  );
}

HeaderMain.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default HeaderMain;
