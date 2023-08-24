const Input = props=>{
    return(
        <form onSubmit={props.onFormSubmit} className="notes-input flex flex-col gap-2 lg:px-48 md:px-32 px-4 mt-4 items-center">
            <input value={props.inputtedTitle} onChange={props.titleChanged} maxLength={50}  type="text" className=" bg-white rounded-lg h-10 w-full px-3 font-semibold" autoFocus placeholder="Enter your notes title here." />
            <textarea style={{resize:'none'}} value={props.inputtedText} onChange={props.inputChanged} maxLength={1000}  type="text" className="bg-white rounded-lg w-full pt-3 px-3 font-semibold h-32" placeholder="Enter your notes here." />
            <button onClick={props.click} className="bg-white py-2 rounded-lg shadow-md w-full text-slate-950 font-bold hover:bg-gray-200">Add</button>
        </form>
    );
}

export default Input;