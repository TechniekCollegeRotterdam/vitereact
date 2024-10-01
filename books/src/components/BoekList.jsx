import { useState } from 'react';
import Boek from "./boek";

const BoekList = () =>{

const [books, setBooks] = useState([
    {title: "het leven van loser", image: "afbeelding 1", author:"Ola"},
    {title: "het leven van loser 2", image: "afbeelding 2", author:"Ola"},
    {title: "het leven van loser 3", image: "afbeelding 3", author:"Ola"},
    {title: "het leven van loser 4", image: "afbeelding 4", author:"Ola"}
]);



    return (
      <section>
        {books.map((book) => (
            <Boek title={book.title} author={book.author} image={book.image}/>
        ))}

      </section>
    );
};

export default BoekList;