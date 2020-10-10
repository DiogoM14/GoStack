import React, { useState } from 'react'

import Header from './components/Header'

import backgroundImage from './assets/background.jpeg'
import './App.css'

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`])

    console.log(projects)
  }

  return (
    <>
      <Header title="Homepage" />

      <img width={300} src={backgroundImage} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add project</button>
    </>
  )
}

export default App