import React from 'react';
import { Media } from 'reactstrap';

export const CommentItem = ({ data: { email, message, gravatarUrl }, handleOpenModal }) => {
  return (
    <li className="comment-feed-list__item">
      <Media>
        <Media left>
          <Media
            onClick={() => handleOpenModal({email, gravatarUrl})}
            className="comment-feed-list__item__gravatar"
            object
            src={gravatarUrl}
            alt={email}
          />
        </Media>
        <Media body>
          <p className="comment-feed-list__item__email">{email}</p>
          <p className="comment-feed-list__item__message">{message}</p>
        </Media>
      </Media>
    </li>
  );
};

export default CommentItem;
