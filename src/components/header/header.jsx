import stickyNotes from '../../assets/images/sticky-note.png'
const scrollToBtnHandler = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
}
const Header = ()=>{
    return (
        <div className="sticky top-0 bg-slate-950 p-4 text-center mb-2 text-white flex justify-between">
            <img onClick={scrollToBtnHandler} className='cursor-pointer hover:opacity-75' src={stickyNotes} width={50} alt="sticky notes logo" />
            <div>
                <div className="header-title text-3xl font-bold font-righteous">Sticky Notes</div>
                <div className="header-subtitle font-semibold font-plusJakarta">Expose your thoughts here.</div>
            </div>
            <div></div>
        </div>
    );
}

export default Header;