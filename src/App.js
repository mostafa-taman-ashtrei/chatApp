import React from 'react';
import { Container } from 'react-bootstrap'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss'
import ApolloProvider from './ApolloProvider';
import { AuthProvider } from './context/auth';
import { MessageProvider } from './context/message'
import Auth from './utils/Auth';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <MessageProvider>
          <BrowserRouter>
            <Container className="pt-5">
              <Switch>
                <Auth exact path="/" component={Home} authenticated/>
                <Auth path="/register" component={Register} guest/>
                <Auth path="/login" component={Login} guest/>
              </Switch>
            </Container>
          </BrowserRouter>
        </MessageProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
