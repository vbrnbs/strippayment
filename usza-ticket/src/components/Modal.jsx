import React from "react";

const Modal = ({items}) => {
  return (
    <div>
      {/* Open the modal using ID.showModal() method */}
      <button className='btn' onClick={() => window.my_modal_2.showModal()}>
        Cart {items}
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
