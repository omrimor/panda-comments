import React from 'react';
import { Modal, ModalBody, Media } from 'reactstrap';

export const CommentItemModal = ({ isModalOpen, handleToggle, lastActiveGravatar, lastActiveEmail, lastActiveDate }) => {
  return (
    <Modal isOpen={isModalOpen} toggle={() => handleToggle()}>
      <ModalBody>
        <Media>
          <Media left>
            <Media
              className="comment-feed-list__item__gravatar"
              object
              src={lastActiveGravatar}
              alt={lastActiveEmail}
            />
          </Media>
          <Media body>
            <p>
              <span style={{fontWeight: 'bold'}}>Author: </span>
              {lastActiveEmail}
            </p>
            <p>
              <span style={{fontWeight: 'bold'}}>Last active: </span>
              {lastActiveDate.toString()}
            </p>
          </Media>
        </Media>
      </ModalBody>
    </Modal>
  );
};

export default CommentItemModal;
