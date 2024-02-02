
import './App.css';
import React, { useState } from 'react';

const MessageReprinter = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [outputMessage, setOutputMessage] = useState('');

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleReprint = () => {
    setOutputMessage(inputMessage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="heading">Director and Movies</h2>
      </header>
        <input className="input1"
        type="text"
        name="directorname"
        id="directorname"
        placeholder="Director Name"
        value={inputMessage}
        onChange={handleInputChange}
        />
        <input className="input2"
        type="text"
        name="moviename"
        id="moviename"
        placeholder="Movie Name"
        value={inputMessage}
        onChange={handleInputChange}
        />
        <button className="but" onClick={handleReprint}>Add</button>
      {outputMessage && <p className='new'>{outputMessage}</p>}
        
      </div>
    
  );
}

export default MessageReprinter;
