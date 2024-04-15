import { Link } from 'react-router-dom';
import backImg from '../assets/back-arrow.svg';
import dropImg from '../assets/Vector.svg';

const NewTask = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className='new-task-wrapper '>
        <main className='container'>
          {/* header part */}
          <h2 className='d-flex align-items-center'>
            <Link
              to='/alltasks'
              className=' my-5 headers new-task-header text-decoration-none ms-1'
            >
              <img src={backImg} alt='back' />
            </Link>
            <span className='header-span'>New Task</span>
          </h2>

          {/* task title input */}
          <div className='new-task-container '>
            <input
              type='text'
              placeholder='E.g Project Defense, Assignment ...'
              className='p-3 rounded-1 w-100'
            />
            <label htmlFor='' className='task-title'>
              Task Title
            </label>
          </div>

          {/* task description input */}
          <div className='new-task-container mt-5 '>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Briefly describe your task...'
              className=' description-input p-3 rounded-1 w-100'
            ></textarea>
            <label htmlFor='' className='task-title'>
              Description
            </label>
          </div>

          {/* task title input */}
          <div className='new-task-container mt-5 '>
            <input type='text' className=' Tags-input p-3 rounded-1 w-100' />
            <div className='tags-btn'>
              <button className='btn light urgent-important-btn ms-3 rounded-1'>
                Urgent
              </button>
              <button className='btn light urgent-important-btn ms-3 rounded-1 '>
                Important
              </button>
            </div>
            <img src={dropImg} alt='drop' className='drop-img' />

            <label htmlFor='' className='task-title'>
              Tags
            </label>
          </div>

          {/* done btn */}
          <button className='btn btn-lg mt-5 w-100 done-task-btn rounded-1'>
            Done
          </button>

          {/* back to top link */}
          <div className='text-center mt-5 pb-3 '>
            <Link onClick={scrollToTop} className='new-task-link '>
              Back To Top
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default NewTask;
