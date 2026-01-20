import React, { useState } from 'react';
import Modal from './Modal';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ModalComponent() {
  const [modalOpen, setModalOpen] = useState(true); // Set to true to open on load

  const closeModal = () => setModalOpen(false);

  const githubButton = (
    <Link to="https://github.com/yours7himanshu/Jaipur-National-University-Virtual-Classroom" target="_blank" >
      <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group">
        <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span>Star on Jaipur National University</span>
      </button>
    </Link>
  );

  return (
    <div className="App">
      {modalOpen && <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        content={{
          disclaimer: "Disclaimer : Project is under Apache License 2.0",
          message: " Wanna help me in my journey 💎 ? Please star this repository to support my project.",
          thank: 'Thank You ❤️.'
        }}
        actionButton={githubButton}
      />}
      {/* Rest of your app content */}
    </div>
  );
}

export default ModalComponent;