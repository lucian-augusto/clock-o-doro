import React from 'react';

function Header() {
    return (
        <div>
            {/* Navbar */}
            <section className="" id="title">
                <div className="container-fluid">
                    {/* Nav Bar */}
                    <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
                        <a className="navbar-brand" href="#">Clock-o-doro</a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo2">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo2">
                            <ul className="navbar-nav ml-auto">
                                {/* <li className="nav-item">
                                                <a className="nav-link" href="#footer">Contact</a>
                                    </li> */}

                                <li className="nav-item">
                                    <a className="nav-link" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">About</a>
                                </li>

                                {/* <li className="nav-item">
                                            <a className="nav-link" href="#login">Login</a>
                                    </li> */}
                            </ul>

                        </div>

                    </nav>

                </div>
            </section>
        </div>
    );
}

export default Header;