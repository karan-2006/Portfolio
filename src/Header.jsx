function Header(){

    return(
        <header>
          <nav className="navbar navbar-expand-lg  bg-gradient">
              <div className="container-fluid">
                <a className="navbar-brand text-danger" href="#"><h1 className="display-1"><b>KARAN KUMAR</b></h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav ms-auto">
                    <a className="nav-link text-warning active" aria-current="page" href="#">Home</a>
                    <a className="nav-link  text-warning" href="#">About</a>
                    <a className="nav-link  text-warning" href="#">Services</a>
                    <a className="nav-link  text-warning" href="#">Resume</a>
                    <a className="nav-link  text-warning" href="#">Portfolio</a>
                    <a className="nav-link  text-warning" href="#">Contact</a>
                  </div>
                </div>
              </div>
          </nav>
        </header>
    )

}

export default Header