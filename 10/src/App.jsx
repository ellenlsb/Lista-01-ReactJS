import React from 'react';
import LoginButton from './components/Login'

function App() {
  return (
    <div className="App">
      <h1>Status de Login</h1>
      <LoginButton logado={true} />
      <LoginButton logado={false} />
    </div>
  );
}

export default App;
