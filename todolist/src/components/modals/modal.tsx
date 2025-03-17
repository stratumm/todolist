import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components"


const ModalComponent = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <AddButton onClick={openModal}>Add Todo</AddButton>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "28rem",
            height: "10rem",
            padding: "20px",
            borderRadius: "8px",
          },
        }}
      >
        <h2 style={{display: "flex", justifyContent: "center"}}>TODO</h2>
        <p>#TODO manage adding and deleting things here</p>
        <button onClick={closeModal}>&times;</button>
      </Modal>
    </div>
  );
};

export default ModalComponent;

const AddButton = styled.button`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-family: inherit;
    border-radius: 8px;
    padding: 1rem;
`