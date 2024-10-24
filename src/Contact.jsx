function Contact() {

    return(
        <>
        <div className="container-fluid py-5">
            <center>
                <h3 className='display-3 text-primary'>Get in touch</h3>
                <h6 className="display-6 text-secondary">Feel free to drop me a line - Contact me</h6>
                <hr className='w-25' />
                <form action="">
                    <div className="row py-3">
                      <div className="col">
                        <input type="text" className="form-control border-light bg-transparent text-light" placeholder="Your Name" aria-label="your Name"/>
                      </div>
                      <div className="col">
                        <input type="email" className="form-control border-light bg-transparent text-light" placeholder="Your Email Address" aria-label="Your Email Address"/>
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col">
                        <input type="text" className="form-control border-light bg-transparent text-light" placeholder="Subject" aria-label="Subject"/>
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col">
                        <textarea className="form-control border-light bg-transparent text-light" placeholder="How Can I Help You ?" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col">
                        <button className="btn btn-outline-light" type="submit">Contact Now</button>
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col">
                      <div class="card border-light bg-transparent text-light">
                        <div class="card-body">
                          <h5 class="card-title">Address</h5>
                          <hr className="w-25"/>
                          <p class="card-text">123 lorem ipsum New Street</p>
                          <p class="card-text">Chennai Tamilnadu, India</p>
                        </div>
                      </div>
                      </div>
                      <div className="col">
                      <div class="card border-light bg-transparent text-light">
                        <div class="card-body">
                          <h5 class="card-title">Phone No</h5>
                          <hr className="w-25"/>
                          <p class="card-text">+918925050228</p>
                          <p class="card-text">+918925050228</p>
                        </div>
                      </div>
                      </div>
                      <div className="col">
                      <div class="card border-light bg-transparent text-light">
                        <div class="card-body">
                          <h5 class="card-title">Email</h5>
                          <hr className="w-25"/>
                          <p class="card-text">karankumar2001red@gmail.com</p>
                          <p class="card-text">karansunil2006@gmail.com</p>
                        </div>
                      </div>
                      </div>
                    </div>
                    
                    
                </form>
            </center>
        </div>
        </>
    )
    
}
export default Contact