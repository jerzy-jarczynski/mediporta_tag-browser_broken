import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { fetchStackOverflowTags } from './api'; // Zaimportuj funkcję pobierającą tagi

const App = () => {
  const [tags, setTags] = useState(null); // Stan przechowujący pobrane tagi

  // Funkcja do pobierania tagów po kliknięciu przycisku
  const handleButtonClick = async () => {
    try {
      const fetchedTags = await fetchStackOverflowTags(1, 10); // Pobierz tagi
      setTags(fetchedTags); // Ustaw pobrane tagi w stanie
      console.log('Tags:', fetchedTags); // Wyświetl tagi w konsoli
    } catch (error) {
      console.error('Error:', error); // Obsłuż błąd
    }
  };

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Hello World!
      </Button>
    </div>
  );
};

export default App;
