import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Sidebar = ({ posts }) => (
  <Grid className="facet_sidebar" item md={2} sx={{ mt: 3 }}>
    <Typography variant="h6" gutterBottom>
      Recentes
    </Typography>
    {posts.slice(0, 5).map((post) => (
      <Link display="block" variant="body1" href="/" key={post.title}>
        {post.title}
      </Link>
    ))}
  </Grid>
);

Sidebar.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Sidebar;
