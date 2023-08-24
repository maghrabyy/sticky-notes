import stickyNotes from '../../assets/images/sticky-note.png'
const Header = ()=>{
    return (
        <div className="sticky top-0 bg-slate-950 p-4 text-center mb-2 text-white flex justify-between">
            <a href="/#"><img src={stickyNotes} width={50} alt="sticky notes logo" /></a>
            <div>
                <div className="header-title text-3xl font-bold font-righteous">Sticky Notes</div>
                <div className="header-subtitle font-semibold font-plusJakarta">Expose your thoughts here.</div>
            </div>
            <div></div>
        </div>
    );
}

export default Header;