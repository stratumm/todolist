import React, { useState } from "react";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={openModal}>Open Modal</button>

      {/* Modal */}
      {isModalOpen && (
        <div style={styles.modalOverlay as React.CSSProperties}>
          <div style={styles.modalContent as React.CSSProperties}>
            <span style={styles.closeButton as React.CSSProperties} onClick={closeModal}>
              &times;
            </span>
            <p>This is a modal!</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Inline styles for the modal
const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    fontSize: "20px",
  },
};

export default Modal