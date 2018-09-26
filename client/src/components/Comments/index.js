import React, {Component} from 'react';

export class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.getComments()
      .then(res => this.setState({ comments: res }))
      .catch(err => console.log(err));
  }

  getComments = async () => {
    try {
      const response = await fetch('/api/comments');
      // const body = await response.json();
      return await response.json();

    } catch (err) {
      throw Error(err);
    }


  };

  render() {
    console.log('here!!!',this.state.comments)
    return (
      <div>Im the feed y'all</div>
    );
  }
}

export default Comments;
