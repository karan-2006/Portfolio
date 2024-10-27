function Header(){

    return(

         <header data-spy="scroll" data-target="#navbarNavAltMarkup" data-offset="100">
             <nav className="navbar navbar-expand-lg bg-transparent">
                 <div className="container-fluid">
                     <a className="navbar-brand text-danger" href="#"><h1 className="display-1"><b>KARAN KUMAR</b></h1></a>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                         <div className="navbar-nav ms-auto">
                             <a className="nav-link text-warning active" aria-current="page" href="#home">Home</a>
                             <a className="nav-link text-warning" href="#about">About</a>
                             <a className="nav-link text-warning" href="#services">Services</a>
                             <a className="nav-link text-warning" href="#resume">Resume</a>
                             <a className="nav-link text-warning" href="#portfolio">Portfolio</a>
                             <a className="nav-link text-warning" href="#contact">Contact</a>
                         </div>
                     </div>
                 </div>
             </nav>
         </header>
    )

}

export default Header