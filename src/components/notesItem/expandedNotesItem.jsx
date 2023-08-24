import './expandedNotesItem.css';

const ExpandedNotesItem = props=>{
    
    return(
        <div className={props.showNotes?  null: "hidden "}> 
            <div onClick={props.exitNotesClick} className="fixed bg-black opacity-70 inset-0 z-40 cursor-pointer"></div>
            <div className="expandedNotes fixed shadow-lg rounded-lg z-50 bg-white text-slate-950 w-9/12 md:min-w-auto max-h-96 lg:max-h-fit overflow-y-scroll">
                <div onClick={props.exitNotesClick} className="exitBtn inline-block fixed text-2xl right-2 cursor-pointer font-bold hover:text-gray-600">x</div>
                <div className='header p-4'>
                    <div className="title text-2xl font-bold font-ubuntu">{props.title}</div>
                </div>
                <div className='content px-4 pb-2 flex flex-col justify-between'>
                    <div className='text-xl pb-4 font-plusJakarta'>{props.text}</div>
                    <div className='sticky bottom-0 py-2 bg-white flex justify-between font-plusJakarta'>
                        <div className="date text-xs text-gray-500">{props.date}</div>
                        <div onClick={props.notesDeleteClicked} className='text-xs text-red-500 mx-2 cursor-pointer hover:text-red-400'>delete</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ExpandedNotesItem;
