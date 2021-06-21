import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './Blog';
import EditPost from './EditPost';
import NewPost from './NewPost';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Blog />} />
      <Route exact path="/newpost" component={NewPost} />
      <Route exact path="/editpost" component={EditPost} />
    </Switch>
  </BrowserRouter>
);

export default App;
