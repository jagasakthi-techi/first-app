import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
   const welcome ={
    greeting:'hey',
    title:'react',
  };
 
  const [count, setCount] = useState(0)
const title = 'react';
 
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const robin = new Person('Robin', 'Wieruch');
console.log(robin.getName());

 return(
 <>
{robin.getName()}
   <div>
   <h1>Hello</h1>
   </div>
   <div>
   <h1>jagadeesan {title}</h1>
   </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h1>dhiyasri</h1>
      </div>
      <div>
        <label htmlFor="search">search:</label>
        <input id="search" type="text" />
        <h1>
          {welcome.greeting} {welcome.title}
        </h1> 
      </div>
       

       
      
    </>
  )
}

export default App;
