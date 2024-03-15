import './App.css';

function Header(){
    return (
        <header className="header">
             <h1 className='tittle'>A Collection of Heartwarming Games</h1>
              <nav className="nav">
                <ul className="nav-links">
                    <li><a href="./" className ="nav-link">Games</a></li>
                    <li><a href="./"className ="nav-link">Adventures</a></li>
                    <li><a href="./"className ="nav-link">Support</a></li>
                </ul>
              </nav>
          
        </header>
    );
}

export default Header;
