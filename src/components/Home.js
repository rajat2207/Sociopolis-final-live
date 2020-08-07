import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PostsList } from './';

class Home extends Component {
    render() {
        console.log('Props', this.props)
        return (
            <div className="home">
                <PostsList />
            </div>
        );
    }
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Home;