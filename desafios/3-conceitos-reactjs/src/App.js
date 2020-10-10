import React, { useState, useEffect } from "react";
import api from './services/api'

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([{}])

  useEffect(() => {
    api.get('repositories').then(response => {
     setRepositories(response.data)
    })
  }, [])

  async function handleAddRepository() {

  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          {repositories.map(repository => <p key={repository.id}>{repository.title}</p>)}
    
          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
