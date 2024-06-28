import React from 'react';
import ReactDOM from 'react-dom';
import { AddUserForm } from '../AddUserForm';
import FocusTrap from 'focus-trap-react';
export const Modal = ({
    onClickOutside,
    onKeyDown,
    modalRef,
    buttonRef,
    closeModal,
    onSubmit
}) => {
    return ReactDOM.createPortal(
        <FocusTrap>
            <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className="modal-cover"
                onClick={onClickOutside}
                onKeyDown={onKeyDown}
            >
                <div className="modal-area" ref={modalRef}>
                    <button
                        ref={buttonRef}
                        aria-label="Close Modal"
                        aria-labelledby="close-modal"
                        className="_modal-close"
                        onClick={closeModal}
                    >
                        <span id="close-modal" className="_hide-visual">
                            Close
                        </span>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3982 0.896484C31.1692 0.896484 35.0467 5.02681 35.0467 11.1719V25.3588C35.0467 31.504 31.1692 35.6343 25.3965 35.6343H10.636C4.86499 35.6343 0.989258 31.504 0.989258 25.3588V11.1719C0.989258 5.02681 4.86499 0.896484 10.636 0.896484H25.3982ZM25.3982 3.50182H10.636C6.32775 3.50182 3.54356 6.51185 3.54356 11.1719V25.3588C3.54356 30.0189 6.32775 33.0289 10.636 33.0289H25.3965C29.7065 33.0289 32.4923 30.0189 32.4923 25.3588V11.1719C32.4923 6.51185 29.7065 3.50182 25.3982 3.50182ZM14.8344 13.1634L18.0145 16.4069L21.193 13.1671C21.6919 12.6582 22.4991 12.6582 22.998 13.1671C23.4969 13.676 23.4969 14.4993 22.998 15.0082L19.8196 18.248L23.0014 21.4953C23.5003 22.0042 23.5003 22.8275 23.0014 23.3364C22.7528 23.5917 22.4241 23.7185 22.0989 23.7185C21.7719 23.7185 21.445 23.5917 21.1964 23.3364L18.0145 20.0891L14.8378 23.3314C14.5892 23.5867 14.2623 23.7135 13.9353 23.7135C13.6084 23.7135 13.2814 23.5867 13.0328 23.3314C12.5339 22.8225 12.5339 21.9992 13.0328 21.4903L16.2095 18.248L13.0294 15.0045C12.5305 14.4956 12.5305 13.6724 13.0294 13.1634C13.53 12.6545 14.3372 12.6545 14.8344 13.1634Z" fill="#8F532E" />
                        </svg>

                        {/* <svg className="_modal-close-icon" viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg> */}
                    </button>
                    <div className="modal-body">
                        <AddUserForm onSubmit={onSubmit} />
                    </div>
                </div>
            </aside>
        </FocusTrap>,
        document.body
    );
};

export default Modal;
