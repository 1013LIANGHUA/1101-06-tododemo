import { useState } from 'react';
import Backdrop_06 from './Backdrop_06';
import Modal_06 from './Modal_06';

function Todo_06(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            Delete
          </button>
        </div>
        {showModal && <Backdrop_06 onClick={closeModalHandler} />}
        {showModal && (
          <Modal_06 text='Are you sure?' onClose={closeModalHandler} />
        )}
      </div>
    </div>
  );
}

export default Todo_06;
