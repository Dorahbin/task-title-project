import editImg from '../assets/edit.svg';
import deleteImg from '../assets/delete.svg';
import plusImg from '../assets/plus-img.svg';
import { Link } from 'react-router-dom';

const AllTask = () => {
  return (
    <>
      <div className='all-task-container gen-bgrc'>
        <main className='container '>
          {/* tasks header */}
          <div className='tasks-header text-dark headers d-flex justify-content-between py-4 align-items-center'>
            <h1 className=''>My Tasks</h1>
            <Link
              to='/newtasks'
              className='d-flex align-items-center gap-3 add-new-item'
            >
              {' '}
              <img src={plusImg} alt='add' /> Add New Task
            </Link>
          </div>

          {/* tasks contents 1 */}
          {/* first box */}
          <div className='task-content-box border rounded p-2 mb-5'>
            {/* task options */}
            <div className='task-option d-flex justify-content-between'>
              {/* urgent / important */}

              <div className='align-self-center urgent'>
                <h5>Urgent</h5>
              </div>
              {/* edit / delete */}
              <div className='edit-delete-container d-flex gap-2  align-items-center'>
                <Link
                  to='/edittasks'
                  className='btn btn-md rounded-1 d-flex gap-2 align-items-center  edit-btn'
                >
                  <img
                    src={editImg}
                    alt='bin'
                    className='img-fluid delete-edit-img'
                  />
                  Edit
                </Link>
                <button className='btn btn-md delete-btn gap-2 d-flex align-items-center'>
                  <img src={deleteImg} alt='bin' className='delete-edit-img' />
                  Delete
                </button>
              </div>
            </div>
            <hr />

            {/* second box */}
            <div className='content-box'>
              <h2>FinTech Website Update</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh
                aliquam faucibus et magna. Interdum eu tempus ultricies cras
                neque mi. Eget tellus suspendisse et viverra.
              </p>
            </div>
          </div>

          {/* tasks contents 2 */}
          {/* first box */}
          <div className='task-content-box border rounded p-2 mb-5'>
            {/* task options */}
            <div className='task-option d-flex justify-content-between'>
              {/* urgent / important */}

              <div className='align-self-center important'>
                <h5>Important</h5>
              </div>
              {/* edit / delete */}
              <div className='edit-delete-container d-flex gap-2  align-items-center'>
                <Link
                  to='/edittasks'
                  className='btn btn-md rounded-1 d-flex gap-2 align-items-center  edit-btn'
                >
                  <img
                    src={editImg}
                    alt='bin'
                    className='img-fluid delete-edit-img'
                  />
                  Edit
                </Link>
                <button className='btn btn-md delete-btn gap-2 d-flex align-items-center'>
                  <img src={deleteImg} alt='bin' className='delete-edit-img' />
                  Delete
                </button>
              </div>
            </div>
            <hr />

            {/* second box */}
            <div className='content-box'>
              <h2>Agro Website Update</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh
                aliquam faucibus et magna. Interdum eu tempus ultricies cras
                neque mi. Eget tellus suspendisse et viverra.
              </p>
            </div>
          </div>

          {/* tasks contents 3 */}
          {/* first box */}
          <div className='task-content-box border rounded p-2 mb-5'>
            {/* task options */}
            <div className='task-option d-flex justify-content-between'>
              {/* urgent / important */}

              <div className='align-self-center urgent'>
                <h5>Urgent</h5>
              </div>
              {/* edit / delete */}
              <div className='edit-delete-container d-flex gap-2  align-items-center'>
                <Link
                  to='/edittasks'
                  className='btn btn-md rounded-1 d-flex gap-2 align-items-center  edit-btn'
                >
                  <img
                    src={editImg}
                    alt='bin'
                    className='img-fluid delete-edit-img'
                  />
                  Edit
                </Link>
                <button className='btn btn-md delete-btn gap-2 d-flex align-items-center'>
                  <img src={deleteImg} alt='bin' className='delete-edit-img' />
                  Delete
                </button>
              </div>
            </div>
            <hr />

            {/* second box */}
            <div className='content-box'>
              <h2>FinTech Website Update</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh
                aliquam faucibus et magna. Interdum eu tempus ultricies cras
                neque mi. Eget tellus suspendisse et viverra.
              </p>
            </div>
          </div>

          {/* tasks contents 2 */}
          {/* first box */}
          <div className='task-content-box border rounded p-2 mb-5'>
            {/* task options */}
            <div className='task-option d-flex justify-content-between'>
              {/* urgent / important */}

              <div className='align-self-center important'>
                <h5>Important</h5>
              </div>
              {/* edit / delete */}
              <div className='edit-delete-container d-flex gap-2  align-items-center'>
                <Link
                  to='/edittasks'
                  className='btn btn-md rounded-1 d-flex gap-2 align-items-center  edit-btn'
                >
                  <img
                    src={editImg}
                    alt='bin'
                    className='img-fluid delete-edit-img'
                  />
                  Edit
                </Link>
                <button className='btn btn-md delete-btn gap-2 d-flex align-items-center'>
                  <img src={deleteImg} alt='bin' className='delete-edit-img' />
                  Delete
                </button>
              </div>
            </div>
            <hr />

            {/* second box */}
            <div className='content-box'>
              <h2>Agro Website Update</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh
                aliquam faucibus et magna. Interdum eu tempus ultricies cras
                neque mi. Eget tellus suspendisse et viverra.
              </p>
            </div>
          </div>

          <div className='text-center pb-3 '>
            <a href='' target='blank' className='new-task-link'>
              Back To Top
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default AllTask;
