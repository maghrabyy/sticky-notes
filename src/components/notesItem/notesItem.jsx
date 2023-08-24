const StickyNotesItem = props =>{
    return(
        <div onClick={props.notesClicked} className="stickyNotes-item bg-white px-3 py-2 rounded-xl shadow-lg hover:scale-105 cursor-pointer">
            <div className="inputted-title font-bold text-2xl pt-2 overflow-hidden font-ubuntu">{props.title}</div>  
            <div className="inputted-text font-semibold text-xl  py-2 overflow-hidden font-plusJakarta">{props.text}</div>  
        </div>
    );
}

export default StickyNotesItem