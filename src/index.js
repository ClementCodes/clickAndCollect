import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client';


//le const  client qui est l url sur lequel l'utiilisateur va se retrouver.
//de plus appolo client va permettre de recuperer des données deja mise en cache pour eviter les requetes et gagner du temps et de l argent 
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(

  <React.StrictMode>
  <ApolloProvider client = {client}>
      <App />
    </ApolloProvider>
    </React.StrictMode>
  
 ,
  document.getElementById('root')
);
