import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { CssBaseline, Grid, TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Header from './Header';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" />
        <main>
          <h2>Nova Publicação</h2>
          <Grid container spacing={1} sx={{ display: 'flex' }}>
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
                rows="4"
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
                href="/"
                onClick={async () => {
                  try {
                    const createPost = {
                      title,
                      description,
                    };
                    // await createPost(createPost);
                    console.log(createPost);
                  } catch (err) {
                    setError(err);
                  }
                }}
              >
                SALVAR
              </Button>
              <Button
                variant="contained"
                href="/"
                // onClick={() => setError('cancel')}
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

export default NewPost;
