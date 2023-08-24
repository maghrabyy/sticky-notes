import './App.css';
import { useState } from 'react';
import Header from './components/header/header';
import Input from './components/input/input';
import ListItems from './components/listItems/listitems';
import ExpandedNotesItem from './components/notesItem/expandedNotesItem';


function App() {
  const [list,setList] = useState([]);
  const [notesInput,setNotesInput] = useState('');
  const [notesTitleInput,setNotesTitleInput] = useState('');
  const [expandedNotes,setExpandedNotes] = useState(false);
  const [expandedNotesData,setExpandedNotesData] = useState({
    id:'',
    title:'',
    text:'',
    date:''
  });

  const showExpandedNotesHandler = index=>{
    const listItems = [...list];
    setExpandedNotes(true);
    setExpandedNotesData({
      id:listItems[index].id,
      title:listItems[index].title,
      text:listItems[index].text,
      date:listItems[index].date,
    })
  }

  const itemDeletationHandler = id=>{
      const listItems = [...list];
      const index = listItems.findIndex(obj => {
        return obj.id === id;
      });
      listItems.splice(index,1);
      setList(listItems);
      setExpandedNotes(false);
  }

  const addNotesItemHandler=event=>{
    event.preventDefault();
    if(notesInput.length > 0){
      const date = new Date();
      const currentFullDate = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      const listItems = [...list];
      const itemData = {id:listItems.length,title:notesTitleInput, text:notesInput,date:currentFullDate}
      listItems.push(itemData)
      setList(listItems);
      setNotesInput('');
      setNotesTitleInput('');
    }
  }

    return (
    <div className="App">
      <Header/>
      <Input 
        inputtedTitle={notesTitleInput}
        titleChanged={event=>setNotesTitleInput(event.target.value)} 
        inputtedText={notesInput} 
        inputChanged={event=>setNotesInput(event.target.value)} 
        onFormSubmit={addNotesItemHandler} 
        click={addNotesItemHandler}
      />
      <ListItems 
        list={list} 
        showExpandedNotes={showExpandedNotesHandler}
      />
      <ExpandedNotesItem
        showNotes={expandedNotes}
        exitNotesClick={()=>setExpandedNotes(false)}
        title={expandedNotesData.title}
        text={expandedNotesData.text}
        date={expandedNotesData.date}
        notesDeleteClicked={()=>itemDeletationHandler(expandedNotesData.id)}
      />
    </div>
  );
}

export default App;
