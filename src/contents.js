// contents.js
import React from 'react';
import './App.css';
import datas from './data.json';
import Container from './container.js';

export function Content() {
   return (
      <>
         <main className="container">
            {datas.slice(0, 5).map(data => (
               <Container key={data.id} {...data} />
            ))}
         </main>
         <article className="container">
            {datas.slice(5, 10).map(data => (
               <Container key={data.id} {...data} />
            ))}
         </article>
      </>
   );
}

export default Content;




