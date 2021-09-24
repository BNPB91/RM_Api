import React, {useState, useEffect} from 'react';


// Styles 
import "./App.css";


// COMPONENTS
import SingleCharacter from './components/SingleCharacter.jsx';


const App = () => {


  // Estado del componente
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const handleFetchAPI = async () => {

    try {

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);

    const { results, info} = await response.json();

      // Guardar Results en estado 
    console.log(results);
    console.log(info);

    // setCharacters(results);
    setCharacters([...characters,...results]);
      
    } catch (error) {
      console.log(error);
    }

};


  const handleNewPage = () => {
      setPage(page + 1);
  };



  useEffect (() => { 
    handleFetchAPI();
    }, [page]);


  return (
    <div className="App">
    <section className="characters-container">
    
      {characters.map(character => (
        <SingleCharacter 
        name={character.name} 
        avatar={character.image} 
        key={character.id}
        />
      ))}

      <button className="more-btn" onClick={handleNewPage}>
      Ver más
      </button>

      </section>

    </div>

  );
};

export default App;
