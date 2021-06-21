import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { CssBaseline, Grid, TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Header from './Header';
import updatePost from '../service/updatePost';

const EditPost = () => {
  const history = useHistory();
  const location = useLocation();
  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);
  const [error, setError] = useState('');

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" />
        <main>
          <h2>Editar Publicação</h2>
          <Grid container spacing={3} sx={{ display: 'flex' }}>
            <Grid item xs={12} md={8}>
              <TextField
                label="Título"
                variant="standard"
                sx={{ display: 'flex' }}
                value={title}
                onChange={(e) => {
                  e.preventDefault();
                  setTitle(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                sx={{ display: 'flex' }}
                rows="8"
                multiline
                label="Conteúdo"
                value={description}
                onChange={(e) => {
                  e.preventDefault();
                  setDescription(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Button
                color="primary"
                variant="contained"
                onClick={async () => {
                  try {
                    const createPost = {
                      title,
                      description,
                    };
                    await updatePost(createPost, location.state._id);
                    history.push('/');
                  } catch (err) {
                    setError(err);
                  }
                }}
              >
                SALVAR
              </Button>
              <Button
                variant="contained"
                style={{ 'margin-left': '10px' }}
                href="/"
              >
                CANCELAR
              </Button>
            </Grid>

          </Grid>

          {error && (
            <Alert color="danger" className="mt-2">
              <span>
                Erro na criação da publicação.
                <br />
                Tente novamente.
              </span>
            </Alert>
          )}
        </main>
      </Container>
    </>
  );
};

export default EditPost;
