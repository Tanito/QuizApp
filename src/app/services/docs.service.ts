import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor(private http: HttpClient) { }

  getUSD(){
    return this.http.get('https://free.currconv.com/api/v7/convert?q=USD_CLP&apiKey=9acb4ec550d6dc047e90')

   } 

   getUSD2(){
    return this.http.get('https://www.freeforexapi.com/api/live?pairs=USDCLP')

   } 

  docsContent = [
    {
     id:0,
     background: 'drstone2.png',
     subtitle: "La Edad de Piedra",
     title: 'LA PREHISTORIA',
     content: 'dzaoidzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaajfzajfpfzapifzapijfzapapfzpaifzpifzappihfzapifzpih zadojdzizaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaapjazdjiaidjijzadijzadpijzdaijpdziajpidzaipjzdaijpdzaipjdazpijipjzdaipjzdpijazdiijdzadddddddddddddddddddddddddddddddddddddddddddddddddddzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
    },
    {
     id:1,
     background: 'spice3.jpg',
     subtitle: "La Edad de Oro de la Caballería",
     title: 'La Edad Media',
     content: 'zadddddddddddddddddd'
    }
  ]

  
  objectContent = [
    {
     id:0,
     name: 'Baton',
     description: "Essayez de trouver un baton rigide et solide de la taille qui vous convient. Testez sa résistance.",
     img: 'baton.png',
    },
    {
      id:1,
      name: 'Pierre',
      description: "Essayez de trouver un baton rigide et solide de la taille qui vous convient. Testez sa résistance.",
      img: 'pierre.png',
    },
    {
      id:2,
      name: 'Corde',
      description: "Essayez de trouver un baton rigide et solide de la taille qui vous convient. Testez sa résistance.",
      img: 'corde.png'
    }
  ]





//fonction alternative pour docs-details.page.ts qui permet de faire correspondre un id à celui de docsContent et d'afficher en conséquence le contenu de cet id 
  getDocsContentById(id: Number){
    const docsContent = this.docsContent.find( //le find va chercher l'Objet dans cet array où l'ID est = à l'ID passé comme argument et va retourner ce docsContent
      (docsContentObject) => {
        return docsContentObject.id === id;
      }
    );
    return docsContent;
  }
}
