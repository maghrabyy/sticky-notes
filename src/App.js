import './App.css';
import { useState } from 'react';
import Header from './components/header/header';
import Input from './components/input/input';
import ListItems from './components/listItems/listitems';
import ExpandedNotesItem from './components/notesItem/expandedNotesItem';


function App() {
  const [isEditing,setIsEditing] = useState(false);
  const [titleEditInput,setTitleEditInput]= useState('');
  const [textEditInput,setTextEditInput]= useState('');
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
      exitExpandableNoteHanlder();
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
    const noteEditClickHandler = ()=>{
      setIsEditing(true)
      setTitleEditInput(expandedNotesData.title);
      setTextEditInput(expandedNotesData.text);
    }
    const exitExpandableNoteHanlder = ()=>{
      setExpandedNotes(false)
      setIsEditing(false)
    }

    const editSubmitHandler = ()=>{
      const id = expandedNotesData.id;
      const listItems = [...list];
      const index = listItems.findIndex(obj => {
        return obj.id === id;
      });
      const date = new Date();
      const currentFullDate = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      const modifiedNoteData = {
        id,
        title:titleEditInput,
        text:textEditInput,
        date:currentFullDate
      }
      if(modifiedNoteData.title === expandedNotesData.title && modifiedNoteData.text === expandedNotesData.text){
        setIsEditing(false);
      }else{
        listItems.splice(index,1,modifiedNoteData);
        setList(listItems);
        setIsEditing(false);
        setExpandedNotesData({
          id,
          title:modifiedNoteData.title,
          text:modifiedNoteData.text,
          date:modifiedNoteData.date,
        });
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
        onFormSubmitHanlder={addNotesItemHandler} 
      />
      <ListItems 
        list={list} 
        showExpandedNotes={showExpandedNotesHandler}
      />
      <ExpandedNotesItem
        showNotes={expandedNotes}
        exitNotesClick={exitExpandableNoteHanlder}
        title={expandedNotesData.title}
        text={expandedNotesData.text}
        date={expandedNotesData.date}
        notesDeleteClicked={()=>itemDeletationHandler(expandedNotesData.id)}
        isEditing={isEditing}
        editNotesClicked={noteEditClickHandler}
        cancelHandler={()=>setIsEditing(false)}
        titleEditInput={titleEditInput}
        titleEditHandler = {event=>setTitleEditInput(event.target.value)}
        textEditInput={textEditInput}
        textEditHandler = {event=>setTextEditInput(event.target.value)}
        editSubmitHandler={()=>editSubmitHandler(expandedNotesData.id)}
      />
    </div>
  );
}

export default App;
