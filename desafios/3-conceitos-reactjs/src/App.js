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
    const response = await api.post('repositories', {
      title: `Hello ${Date.now()}`, 
	    url: "http://github.com/...", 
	    techs: ["Node.js", "..."]
    })

    setRepositories([...repositories, response.data])
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`)

    const filterRepositories = repositories.filter(repository => repository.id !== id)

    setRepositories(filterRepositories)
  }

  return (
    <div>
      <button className="addBtn" onClick={handleAddRepository}>Adicionar</button>

      <ul data-testid="repository-list">
        <li>
          {repositories.map(repository => <div key={repository.id}>
            {repository.title}
            
            <button onClick={() => handleRemoveRepository(repository.id)}>Remover</button>
            </div>)}
        </li>
      </ul>

    </div>
  );
}

export default App;
