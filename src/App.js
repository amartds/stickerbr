import React from 'react';
import Routes from './routes';
import GlogalStyle from './styles/global';
import './config/ReactotronConfig';
import Header from './components/Header/';
import Footer from './components/Footer/';
import { Router } from 'react-router-dom';
import { Container } from './styles';
import { Provider } from 'react-redux';
import history from './services/history';
import store from '../src/store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlogalStyle />
        <Container>
          <Header />
          <Routes />
          <ToastContainer autoClose={3000} />
        </Container>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
