import StickyNotesItem from "../notesItem/notesItem";
import emptyList from "../../assets/images/emptyList.png"

const ListItems = props=>{
    return (
        <div className="lg:px-48 md:px-32 px-4 py-5">
            <div className={props.list.length >0? "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grids-cols-1 gap-2": null}>
                {props.list.length >0 ?
                props.list.map((item,index)=>{
                    return <StickyNotesItem 
                            title={item.title}
                            text={item.text.length > 100? item.text.substring(0, 100).concat('....'): item.text} 
                            date={item.date} 
                            notesClicked={()=>props.showExpandedNotes(index)} 
                            key ={index}
                            />
                }).reverse()
                :
                <div className="emptyNotesList">
                    <div className="emptyMsg font-bold font-plusJakarta text-center text-2xl flex flex-col items-center gap-4 text-white">
                        Nothing in here.
                        <img src={emptyList} width={350} alt="" />
                    </div>
                </div>
                }
            </div>
        </div>
    );
}

export default ListItems;