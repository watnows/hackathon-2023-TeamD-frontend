import React,{ useState } from 'react'

function ModalOpen() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
    </div>
  )
}

export default ModalOpen