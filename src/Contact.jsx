function Contact() {

    return(
        <>
        <div className="container-fluid py-5">
            <center>
                <h3 className='display-3 text-primary'>Get in touch</h3>
                <h6 className="display-6 text-secondary">Feel free to drop me a line - Contact me</h6>
                <hr className='w-25' />
                <div className="container">
                <form action="">
                    <div className="row py-3">
                      <div className="col">
                        <input autoComplete="on" type="text"  name="name" className="form-control border-light bg-transparent text-light" placeholder="Your Name" aria-label="your Name"/>
                      </div>
                      <div className="col">
                        <input autoComplete="on" type="email"  name="email" className="form-control border-light bg-transparent text-light" placeholder="Your Email Address" aria-label="Your Email Address"/>
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col">
                        <input autoComplete="on" type="text"  name="Subject" className="form-control border-light bg-transparent text-light" placeholder="Subject" aria-label="Subject"/>
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col">
                        <textarea autoComplete="on" name="text"  className="form-control border-light bg-transparent text-light" placeholder="How Can I Help You ?" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col">
                        <button className="btn btn-outline-light" type="submit">Contact Now</button>
                      </div>
                    </div>
                </form>
                </div>
                    <div className="row py-3">
                      <div className="col">
                      <div className="card border-light bg-transparent text-light">
                        <div className="card-body">
                          <h5 className="card-title">Address</h5>
                          <hr className="w-25"/>
                          <p className="card-text">123 lorem ipsum New Street</p>
                          <p className="card-text">Chennai Tamilnadu, India</p>
                        </div>
                      </div>
                      </div>
                      <div className="col">
                      <div className="card border-light bg-transparent text-light">
                        <div className="card-body">
                          <h5 className="card-title">Phone No</h5>
                          <hr className="w-25"/>
                          <p className="card-text">+918925050228</p>
                          <p className="card-text">+918925050228</p>
                        </div>
                      </div>
                      </div>
                      <div className="col">
                      <div className="card border-light bg-transparent text-light">
                        <div className="card-body">
                          <h5 className="card-title">Email</h5>
                          <hr className="w-25"/>
                          <p className="card-text">karankumar2001red@gmail.com</p>
                          <p className="card-text">karansunil2006@gmail.com</p>
                        </div>
                      </div>
                      </div>
                    </div>
            </center>
        </div>
        </>
    )
    
}
export default Contact