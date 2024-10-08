import { useState } from 'react';
import Boek from "./boek";
import data from "../data";

const BoekList = () =>{

const [books, setBooks] = useState(data);



    return (
      <section>
        {books.map((book) => (
            <Boek title={book.title} author={book.author} image={book.image}/>
        ))}

      </section>
    );
};

export default BoekList;