import profilePic from './assets/Pofile.jpg'
function About() {

  return (
    <div className='container-fluid py-5'>
      <center>
        <h3 className='display-3 text-primary'>About Me</h3>
        <h6 className="display-6 text-secondary">Professional Profile - There Is All About Me</h6>
        <hr className='w-25' />
      </center>
        <div className="row">
        <div className="col-6">
        <img src={profilePic} alt="building" style={{width:"100%", height:"550px"}}/>
        </div>
        <div className="col-6">
        <h3 className='display-3 pt-3'>I'm Karan Kumar</h3>
        <blockquote>
          <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus assumenda,
             voluptas nostrum quasi eaque modi voluptatibus sed enim rem? Itaque veritatis eligendi, magnam
              doloremque vitae temporibus quae error odit.</p>
          <p className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sapiente illo,
             atque animi repellat blanditiis quisquam possimus repellendus! Temporibus ipsa ullam, ipsam
              delectus voluptatibus iure maiores laudantium doloremque!</p>
        </blockquote>
        <blockquote>
          <div className="row list-unstyled">
            <div className="col-6 py-3">
              <li><b>Date of birth:</b>11-09-2001</li>
              <li><b>Freelance:</b>available</li>
              <li><b>Address:</b>Chennai, TamilNadu, India</li>
              <li><b>Spoken Langages:</b>Tamil, English</li>
            </div>
            <div className="col-6 py-3">
              <li><b>Nationality:</b>Indian</li>
              <li><b>Phone:</b>+918925050228</li>
              <li><b>Email:</b>karankumar2001red@gmail.com</li>
              <li><b>Linkedin:</b>Karan.Kumar</li>
            </div>
          </div>
          </blockquote>
          </div>
      </div>
   </div>
  )
}

export default About