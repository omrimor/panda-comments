import React from 'react';
import { Input, CardBody } from 'reactstrap';

import CommentItem from './CommentItem';
import './commentFeed.css';

const getFilteredComments = (comments, filter) =>
  comments.filter(comm => comm.email.indexOf(filter) > -1);

export const CommentFeed = ({ comments, handleInputChange, handleOpenModal, filterValue }) => {
  return (
    <CardBody className="comment-feed">
      <Input
        className="comment-feed__filter-input"
        type="text"
        name="filterValue"
        value={filterValue}
        placeholder="filter"
        onChange={(event) => handleInputChange(event)}
      />
      <ul className="comment-feed-list">
        {
          getFilteredComments(comments, filterValue).map((comment, index) =>
          <CommentItem key={index} data={comment} handleOpenModal={handleOpenModal} />)
        }
      </ul>
    </CardBody>

  );
};

export default CommentFeed;
