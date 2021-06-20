import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import '../App.css';

function FeaturedPost({ post }) {
  return (
    <Card sx={{ display: 'flex', mt: 3 }}>
      <CardContent sx={{ flex: 1 }} className="click-a">
        <Typography component="h2" variant="h5" className="click-b">
          {post.title}
          <IconButton aria-label="Delete" className="click-c">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Delete" className="click-c">
            <CancelIcon />
          </IconButton>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {post.date}
        </Typography>
        <Typography variant="subtitle1" paragraph>
          {post.description}
        </Typography>
        <Typography variant="subtitle1" color="primary">
          Continue reading...
        </Typography>
      </CardContent>
    </Card>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
