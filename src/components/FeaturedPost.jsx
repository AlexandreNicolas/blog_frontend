import React, { useEffect, useState } from 'react';
import PropTypes, { func, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import '../App.css';
import deletePost from '../service/deletePost';

const FeaturedPost = ({ post, updatePosts, setUpdatePosts }) => {
  const [postDate, setPostDate] = useState('');

  useEffect(async () => {
    const today = new Date(post.date);
    setPostDate(today.toDateString());
  }, []);

  return (
    <Card sx={{ display: 'flex', mt: 3 }}>
      <CardContent sx={{ flex: 1 }} className="click-a">
        <Typography component="h2" variant="h5" className="click-b">
          {post.title}
          <Link className="click-c" to={{ pathname: '/editpost', state: post }}>
            <IconButton aria-label="Delete">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton
            aria-label="Delete"
            className="click-c"
            onClick={async () => { await deletePost(post._id); setUpdatePosts(!updatePosts); }}
          >
            <CancelIcon />
          </IconButton>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {postDate}
        </Typography>
        <Typography variant="subtitle1" paragraph>
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  updatePosts: bool.isRequired,
  setUpdatePosts: func.isRequired,
};

export default FeaturedPost;
