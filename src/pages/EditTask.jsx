import { Link } from 'react-router-dom';
import backImg from '../assets/back-arrow.svg';
import editDarkImg from '../assets/edit-img-dark.svg';

const EditPages = () => {
  return (
    <>
      <div className='new-task-wrapper '>
        <main className='container'>
          {/* header part */}
          <h2>
            <Link
              to='/alltasks'
              className='d-flex my-5 headers new-task-header text-decoration-none ms-1 gap-3 align-items-center'
            >
              <img src={backImg} alt='back' />
              Edit Task
            </Link>
          </h2>

          {/* task title input */}
          <div className='new-task-container edit-input'>
            <input
              type='text'
              placeholder='Project Completion'
              className='p-3 rounded-1 w-100 edit-input'
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
              className='edit-description-input p-3 rounded-1 w-100'
              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sit in aliquam pretium. Diam consectetur at tincidunt sed non tempus faucibus posuere eu. Nisi, luctus turpis pharetra quis nunc nulla. At lectus faucibus mattis ante eleifend ac arcu. Nibh morbi adipiscing leo tempus non dolor viverra cras. Sapien in nulla cum fermentum auctor lectus orci. Felis tincidunt lacus, fermentum laoreet sit sit. Lacus, orci pretium, etiam justo lacus. Amet, ultrices eget auctor euismod vitae diam.'
            ></textarea>
            <label htmlFor='' className='task-title'>
              Description
            </label>
          </div>

          {/* task title input */}
          <div className='new-task-container mt-5 '>
            <input type='text' className=' Tags-input p-3 rounded-1 w-100' />
            <div className='tags-btn'>
              <button className='btn dark urgent-important-btn ms-3 rounded-1'>
                Urgent
              </button>
              <button className='btn dark urgent-important-btn ms-3 rounded-1 '>
                Important
              </button>
            </div>
            <img src={editDarkImg} alt='drop' className='drop-img ' />

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
            <a href='' target='blank' className='new-task-link '>
              Back To Top
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default EditPages;
