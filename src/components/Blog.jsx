import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import listPosts from '../service/listPosts';
import HeaderMain from './HeaderMain';

const maxPostsForPage = 4;

export default function Blog() {
  const [allPosts, setAllPosts] = useState([]);
  const [updatePosts, setUpdatePosts] = useState(false);
  const [pageSelected, setPageSelected] = useState(0);

  useEffect(async () => {
    const getPost = await listPosts();
    setAllPosts(getPost);
  }, [updatePosts]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <HeaderMain posts={allPosts} />
        <main>
          <Grid container spacing={5}>
            <Grid item xs={14} md={9}>
              {allPosts.slice(maxPostsForPage * pageSelected, maxPostsForPage * (pageSelected + 1)).map((post) => (
                <FeaturedPost post={post} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts} />
              ))}
              <ReactPaginate
                previousLabel="<"
                nextLabel=">"
                breakLabel="..."
                pageCount={allPosts.length / maxPostsForPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={({ selected }) => setPageSelected(selected)}
                containerClassName="pagination"
                activeClassName="active"
              />
            </Grid>
            <Sidebar
              posts={allPosts}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Blog"
        description=""
      />
    </>
  );
}
