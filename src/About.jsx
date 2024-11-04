import profilePic from './assets/Pofile.jpg'
function About() {

  return (
    <div className='container-fluid position-relative col-xs pt-1 col-lg pt-5' id="about">
      <center className='col-xs pt-1 col-lg pt-5'>
        <h3 className='display-3 text-primary'>About Me</h3>
        <h6 className="display-6 text-success col-xs fs-6 col-lg fs-3">Professional Profile - There Is All About Me</h6>
        <hr className='w-25' />
      </center>
        <div className="row col-xs pt-1 col-lg pt-5">
        <div id='profile' className="col-xs-12 col-md-5 col-lg-5">
        <img src={profilePic} alt="Me" id='pr' style={{width:"75%", height:"550px"}}/>
        </div>
        <div className="col-xs-12 py-2 col-md-6 col-lg-6">
        <h3 className='col-lg display-3 text-info col-xs display-6'>I'm Karan Kumar</h3>
          <p className='col-xs pt-1 col-lg pt-3 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus assumenda,
             voluptas nostrum quasi eaque modi voluptatibus sed enim rem? Itaque veritatis eligendi, magnam
              doloremque vitae temporibus quae error odit.</p>
          <p className='col-xs pb-1 col-lg pb-3 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sapiente illo,
             atque animi repellat blanditiis quisquam possimus repellendus! Temporibus ipsa ullam, ipsam
              delectus voluptatibus iure maiores laudantium doloremque!</p>
          <div className="row list-unstyled">
            <div className="col-sm col-12 pt-1 col-lg col-6 pt-3">
              <li className='text-secondary list-item'><b className='text-warning'>Date of birth:</b>11-09-2001</li>
              <li className='text-secondary list-item'><b className='text-warning'>Freelance:</b>available</li>
              <li className='text-secondary list-item'><b className='text-warning'>Address:</b>Chennai, TamilNadu, India</li>
              <li className='text-secondary list-item'><b className='text-warning'>Spoken Langages:</b>Tamil, English</li>
            </div>
            <div className="col-sm col-12 pt-1 col-lg col-6 pt-3">
              <li className='text-secondary list-item'><b className='text-warning'>Nationality:</b>Indian</li>
              <li className='text-secondary list-item'><b className='text-warning'>Phone:</b>+918925050228</li>
              <li className='text-secondary list-item'><b className='text-warning'>Email:</b>karankumar2001red@gmail.com</li>
              <li className='text-secondary list-item'><b className='text-warning'>Linkedin:</b>Karan.Kumar</li>
            </div>
          </div>
          </div>
      </div>
   </div>
  )
}

export default About