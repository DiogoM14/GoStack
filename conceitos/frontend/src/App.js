import React from 'react'

import Header from './components/Header'

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Test1</li>
          <li>Test2</li>
        </ul>
      </Header>
      <Header title="Landing Page" />
      <Header title="Projects" />
    </>
  )
}

export default App