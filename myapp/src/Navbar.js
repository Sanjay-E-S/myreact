const Navbar = () => {
    const eventlistener = (name) => {
        console.log('hi ' + name);
    }
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <ul className="nav-links">
                <li>
                    <a href="#" onClick={() => eventlistener('sanjay')}> home</a>
                </li>
                <li>
                    <a href="#"> home</a>
                </li>
            </ul>
        </div >
    );
}

export default Navbar;