import Logo from './components/Logo'
import './App.css';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([])

  function handleItems(newItem){
    setItems([...items, newItem])
  }
  function handleDeletItem(id){
    setItems((items) => items.filter((item)=> item.id !== id))
  }
  function handleToggleItem(id){
    setItems((items) => 
        items.map((item) => 
          item.id === id ? {...item, packed: !item.packed} : item))
  }
  function deleteAll(){
    alert('Are you sure you want to delete all items?')
    setItems((items)=> items.filter((item)=> !item.packed))
  }

  return (
    <>
      <Logo/>
      <Form handleItems={handleItems}/>
      <PackingList items={items} handleDeletItem={handleDeletItem} handleToggleItem={handleToggleItem} deleteAll={deleteAll}/>
      <Stats items={items}/>
    </>
  );
}

export default App;
