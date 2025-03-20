import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components"
import { Todo } from "../../models/Todo";
import FilterInput from "../TodoList/FilterInput";

interface props {
  todoList: Array<Todo>
}
Modal.setAppElement("#root")
const ModalComponent: React.FC<props> = ({todoList}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div>
      <AddButton onClick={openModal}>Filter</AddButton>
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
            width: "25rem",
            height: "20rem",
            padding: "20px",
            borderRadius: "8px",
          },
        }}
      >
        <HeadingContainer>
        <h2>TODO</h2>
        <button onClick={closeModal} style={{background:"none", border:"none", cursor:"pointer", fontSize:"2rem"}}>&times;</button>
        </HeadingContainer>
        <p>#TODO manage adding and deleting things here</p>
        <FilterInput todoList={todoList}/>
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

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 

  h2 {
    flex: 1;
    text-align:center;
  }

  button {
    top: 0; 
    right: 0; 
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
`;