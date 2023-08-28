const EditNote = props=>{
    return(
    <div className="notes-edit-input flex flex-col gap-2 py-4">
        <label className='font-bold text-xl'>Edit your note</label>
        <input value={props.titleEditInput} onChange={props.titleEditChange} maxLength={50}  type="text" className=" border-2 border-slate-950 rounded-lg h-10 px-3 font-semibold" autoFocus placeholder="Edit your notes title here." />
        <textarea style={{resize:'none'}} value={props.textEditInput} onChange={props.textEditChange} maxLength={1000}  type="text" className="border-2 border-slate-950 rounded-lg pt-3 px-3 font-semibold h-32" placeholder="Edit your notes here." />
        <div className='flex gap-4'>
            <button onClick={props.onCancelClicked} className="bg-white py-2 rounded-lg shadow-md w-full text-slate-950 font-bold hover:bg-gray-200">Cancel</button>
            <button onClick={props.onSaveClicked} className="bg-white py-2 rounded-lg shadow-md w-full text-slate-950 font-bold hover:bg-gray-200">Save</button>
        </div>
     </div>
    );
}

export default EditNote;