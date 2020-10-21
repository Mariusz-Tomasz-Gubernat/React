import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
// import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {

  state = {
    cards: this.props.cards || [],
    icon: this.props.icon.name,
  }

  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
          },
        ],
      }
    ));
  }
  render() {
    const { cards, icon, title } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div>
          {cards.map(({ key, ...cardsProps }) => (
            <Card key={key} {...cardsProps} />
          ))}
        </div>

        {/* <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>  */}

      </section >
    );
  }
}

Column.propTypes = {
  titleText: PropTypes.node,
  title: PropTypes.node,
  icon: PropTypes.node,
  cards: PropTypes.node,
};
export default Column;