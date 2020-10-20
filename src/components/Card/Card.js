import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.node,
};

export default Card;
