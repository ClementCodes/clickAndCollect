//l'endroit on l'on fait les requétes de notre API ::  the place where we make the requests 
import { gql } from "@apollo/client";

  

//Avec l'import de gql on recupere les donnees de notre api .On definit ici donc notre query
// on a configuerer ntre serveur avec product et on lui deninit avec notre vairiable avec $product 
//ici sur la requete on voudra recuperer c 'es de recuper et donc indiquer seulement ce que l on a besoin 



export const GET_PRODUCTS = gql`
  query ($category: String!) {
    products(category: $category) {
      id
      name
      price
     
    }
  }
`;
