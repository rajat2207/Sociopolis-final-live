import React, { Component } from 'react';
import  PropTypes  from 'prop-types';
import { connect } from 'react-redux';

class PostsList extends Component {
    render() {

        const { posts } = this.props; 

        return (
          <div className="posts-list">
            {posts.map((post) => (
              <div className="post-wrapper" key={post._id}>
                <div className="post-header">
                  <div className="post-avatar">
                    <img
                      src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                      alt="user-pic"
                    />

                    <div>
                      <span className="post-author">{post.user.name}</span>
                      <span className="post-time">a min ago..</span>
                    </div>
                  </div>
                  <div className="post-content">{post.content}</div>

                  <div className="post-actions">
                    <div className="post-likes">
                      <img
                        src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                        alt="likes-icon"
                      />
                      <span>{post.likes.length}</span>
                    </div>

                    <div className="post-comments-icon">
                      <img
                        src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                        alt="comments-icon"
                      />
                      <span>{post.comments.length}</span>
                    </div>
                  </div>

                  <div className="post-comment-box">
                    <input placholder="Type a comment..." />
                  </div>

                  <div className="post-comments-list">
                    <div className="post-comments-item">
                      <div className="post-comment-header">
                        <span className="post-comment-author">Bill</span>
                        <span className="post-comment-time">a min ago..</span>
                        <span className="post-comment-likes">22</span>
                      </div>

                      <div className="post-comment-content">Random Comment</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(PostsList);