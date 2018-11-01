import React from 'react';
import { Flex, Box, Button } from 'blockstack-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Head from '../components/head';
import Brand from '../components/brand';

import UserActions from '../stores/user/actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.handleLogIn();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Head title="Home" />
        <Flex flexWrap="wrap">
          <Box width={1} justifyContent="center">
            <Brand />
          </Box>
          <Box mt={4}>
            {currentUser ? (
              <Button onClick={this.props.logout}>Log Out</Button>
            ) : (
              <Button onClick={this.props.login}>Log In</Button>
            )}
          </Box>
        </Flex>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, UserActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
