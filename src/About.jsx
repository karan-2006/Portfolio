import profilePic from './assets/Pofile.jpg'
function About() {

  return (
    <div className="pt-5">
    <div className="pt-5">
    <div className='container-fluid position-relative pt-5' id="about">
      <center className='pt-5'>
        <h3 className='display-3 text-primary'>About Me</h3>
        <h6 className="display-6 text-success">Professional Profile - There Is All About Me</h6>
        <hr className='w-25' />
      </center>
        <div className="row pt-5">
        <div id='profile' className="col-5">
        <img src={profilePic} alt="building" style={{width:"75%", height:"550px"}}/>
        </div>
        <div className="col-6">
        <h3 className='display-3 text-info'>I'm Karan Kumar</h3>
        <blockquote>
          <p className='pt-5 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus assumenda,
             voluptas nostrum quasi eaque modi voluptatibus sed enim rem? Itaque veritatis eligendi, magnam
              doloremque vitae temporibus quae error odit.</p>
          <p className='pb-5 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sapiente illo,
             atque animi repellat blanditiis quisquam possimus repellendus! Temporibus ipsa ullam, ipsam
              delectus voluptatibus iure maiores laudantium doloremque!</p>
        </blockquote>
        <blockquote>
          <div className="row list-unstyled">
            <div className="col-6 pt-5">
              <li className='text-secondary list-item'><b className='text-warning'>Date of birth:</b>11-09-2001</li>
              <li className='text-secondary list-item'><b className='text-warning'>Freelance:</b>available</li>
              <li className='text-secondary list-item'><b className='text-warning'>Address:</b>Chennai, TamilNadu, India</li>
              <li className='text-secondary list-item'><b className='text-warning'>Spoken Langages:</b>Tamil, English</li>
            </div>
            <div className="col-6 pt-5">
              <li className='text-secondary list-item'><b className='text-warning'>Nationality:</b>Indian</li>
              <li className='text-secondary list-item'><b className='text-warning'>Phone:</b>+918925050228</li>
              <li className='text-secondary list-item'><b className='text-warning'>Email:</b>karankumar2001red@gmail.com</li>
              <li className='text-secondary list-item'><b className='text-warning'>Linkedin:</b>Karan.Kumar</li>
            </div>
          </div>
          </blockquote>
          </div>
      </div>
   </div>
   </div>
   </div>
  )
}

export default About