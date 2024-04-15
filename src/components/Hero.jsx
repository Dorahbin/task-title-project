import heroImg from '../assets/hero-img.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='d-flex  align-items-center justify-content-center'>
          <main className='container row gap-5 w-100 lh-lg'>
            {/* hero component */}
            <section className='col-lg-6 d-flex hero-contents flex-column gap-2 justify-content-center ps-0  me-4 align-items-start'>
              <h2 className='hero-header text-wrap text-dark d-flex flex-column gap-2'>Manage your Tasks on <span className='hero-span'>TaskDuty</span> </h2>
              <p className='hero-paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et,
                at platea tempus duis non eget. Hendrerit tortor fermentum
                bibendum mi nisl semper porttitor. Nec accumsan.
              </p>
             

              <Link to='/alltasks' className='btn  btn-lg rounded-1 hero-btn'>
                Go To My Tasks
              </Link>
            </section>

            {/* hero img */}
            <section className='col-lg-5 mt-4 hero-im'>
              <img src={heroImg} className='hero-img' alt='' />
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Hero;

// <Link to='/alltasks' className='text-decoration-none text-dark'>
// <h4> All Task </h4>
// </Link>
