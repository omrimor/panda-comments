import React, {Component, Fragment} from 'react';
import { Card } from 'reactstrap';

import CommentForm from '../CommentForm';
import CommentFeed from '../CommentFeed';
import CommentItemModal from '../CommentFeed/CommentItemModal';

export class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      email: '',
      message: '',
      filterValue: '',
      isModalOpen: false,
      lastActiveDate: '',
      lastActiveEmail: '',
      lastActiveGravatar: ''
    };
  }

  async componentDidMount() {
    try {
      const comments = await this.getComments();
      this.setState({ comments })
    } catch (err) {
      throw new Error(err);
    }
  }

  getComments = async () => {
    try {
      const response = await fetch('/api/comments');
      return await response.json();
    } catch (err) {
      throw new Error(err);
    }
  };

  postComment = async (email, message) => {
    try {
      const response = await fetch('/api/comments', {
        method: 'post',
        body: JSON.stringify({ email, message }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.json();
    } catch (err) {
      throw new Error(err);
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, message } = this.state;
    this.postComment(email, message)
      .then(comment => {
        this.setState(state => ({
          comments: [...state.comments, comment],
          email: '',
          message: ''
        }))
      })
      .catch(err => { throw new Error(err) });
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleOpenModal = ({ email, gravatarUrl }) => {
    const lastActive = this.getLatestActiveComment(this.state.comments, email);
    this.setState({
      lastActiveDate: lastActive,
      lastActiveEmail: email,
      lastActiveGravatar: gravatarUrl,
    });
    this.toggleModal();
  };

  getLatestActiveComment = (comments, email) =>
    comments
      .filter(comment => comment.email === email)
      .map(comment => new Date(comment.createdAt))
      .sort((a, b) => a > b ? -1 : a < b ? 1 : 0)[0];

  toggleModal = () => {
    this.setState({isModalOpen: !this.state.isModalOpen});
  };

  render() {
    return (
      <Fragment>
        <Card>
          <CommentForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            emailValue={this.state.email}
            messageValue={this.state.message}
          />
          <CommentFeed
            comments={this.state.comments}
            handleInputChange={this.handleInputChange}
            handleOpenModal={this.handleOpenModal}
            filterValue={this.state.filterValue}
          />
        </Card>
        <CommentItemModal
          isModalOpen={this.state.isModalOpen}
          handleToggle={this.toggleModal}
          lastActiveGravatar={this.state.lastActiveGravatar}
          lastActiveEmail={this.state.lastActiveEmail}
          lastActiveDate={this.state.lastActiveDate}
        />
      </Fragment>
    );
  }
}

export default Comments;
