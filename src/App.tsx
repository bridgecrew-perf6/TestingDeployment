import {Children, useEffect, useState} from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import { Sub } from './Components/types';



const initial_State = [
  {
    nick:"Nahomi",
    subMonths: 21,
    avatar: "https://i.pravatar.cc/150?u=nao",
    description: "loremdjpiwshdldl sqihfpjwqfjpqhf"
  },
  {
    nick:"Tana",
    subMonths: 34,
    avatar: "https://i.pravatar.cc/150?u=tana",
  }
]
function App() {
  const [subs, setSubs] = useState<Array<Sub>>([])
  const [newSubsNumber,setNewSubsNumber] = useState<any>(0)
  
  useEffect(()=>{
    setSubs(initial_State)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs,newSub])
  }

  return (
    <div className="App">
      <h1>midu subs</h1>
      <List subs= {subs}/>
      <Form  onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
