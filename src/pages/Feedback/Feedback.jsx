import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number, string } from 'prop-types';
import Header from '../../components/Header';

const THREE = 3;

class Feedback extends Component {
  render() {
    const { gravatarUser, assertions, score } = this.props;
    const urlGravatar = `https://www.gravatar.com/avatar/${gravatarUser}`;
    return (
      <div>
        <Header />
        <img
          src={ urlGravatar }
          data-testid="header-profile-picture"
          alt="avatar-gravatar"
        />
        {assertions < THREE ? (
          <h3 data-testid="feedback-text">Could be better...</h3>)
          : (<h3 data-testid="feedback-text">Well Done!</h3>)}
        <p>{`Você acertou ${assertions} questões!`}</p>
        <p>{`Um total de ${score} pontos`}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ player: { gravatarEmail, assertions, score } }) => ({
  gravatarUser: gravatarEmail,
  assertions,
  score,
});

Feedback.propTypes = {
  gravatarUser: string.isRequired,
  assertions: number.isRequired,
  score: number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
