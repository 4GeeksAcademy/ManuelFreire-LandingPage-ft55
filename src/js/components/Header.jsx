const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body sticky-top" data-bs-theme="dark">
            <div className="container-fluid mx-5 p-0">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-5 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;