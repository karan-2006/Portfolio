function Contact() {

    return(
        <div className="container-fluid position-relative  pt-5" id="contact">
            <center className="col-xs pt-3 col-lg pt-5">
                <h3 className='display-3 text-primary'>Get in touch</h3>
                <h6 className="display-6 text-success col-xs fs-6 col-lg fs-3">Feel free to drop me a line - Contact me</h6>
                <hr className='w-25' />
                <div className="container">
                <form action="">
                    <div className="row col-xs pt-1 col-lg pt-3">
                      <div className="col">
                        <input autoComplete="on" type="text"  name="name" className="form-control border border-secondary bg-transparent text-light" placeholder="Your Name" aria-label="your Name"/>
                      </div>
                      <div className="col">
                        <input autoComplete="on" type="email"  name="email" className="form-control border border-secondary bg-transparent text-light" placeholder="Your Email Address" aria-label="Your Email Address"/>
                      </div>
                    </div>
                    <div className="row col-xs pt-1 col-lg pt-3">
                      <div className="col">
                        <input autoComplete="on" type="text"  name="Subject" className="form-control border border-secondary bg-transparent text-light" placeholder="Subject" aria-label="Subject"/>
                      </div>
                    </div>
                    <div className="row col-xs pt-1 col-lg pt-3">
                      <div className="col">
                        <textarea autoComplete="on" name="text"  className="form-control border border-secondary bg-transparent text-light" placeholder="How Can I Help You ?" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="row col-xs pt-1 col-lg pt-5">
                      <div className="col">
                        <button className="btn btn-outline-danger col-lg fs-3 col-xs fs-6" type="submit">Contact Now</button>
                      </div>
                    </div>
                </form>
                </div>
                    <div className="row pt-3">
                      <div className="col-xs col-12 py-2 col-md col-4 col-lg col-4">
                      <div className="card border border-secondary bg-dark">
                        <div className="card-body">
                          <h5 className="card-title text-info">Address</h5>
                          <hr className="w-25"/>
                          <p className="card-text text-secondary">123 lorem ipsum New Street</p>
                          <p className="card-text text-secondary">Chennai Tamilnadu, India</p>
                        </div>
                      </div>
                      </div>
                      <div className="col-xs col-12 py-2 col-md col-4 col-lg col-4">
                      <div className="card border border-secondary bg-dark">
                        <div className="card-body">
                          <h5 className="card-title text-info">Phone No</h5>
                          <hr className="w-25"/>
                          <p className="card-text text-secondary">+918925050228</p>
                          <p className="card-text text-secondary">+918925050228</p>
                        </div>
                      </div>
                      </div>
                      <div className="col-xs col-12 py-2 col-md col-4 col-lg col-4">
                      <div className="card border border-secondary bg-dark">
                        <div className="card-body">
                          <h5 className="card-title text-info">Email</h5>
                          <hr className="w-25"/>
                          <p className="card-text text-secondary">karankumar2001red@gmail.com</p>
                          <p className="card-text text-secondary">karansunil2006@gmail.com</p>
                        </div>
                      </div>
                      </div>
                    </div>
            </center>
        </div>
    )
    
}
export default Contact