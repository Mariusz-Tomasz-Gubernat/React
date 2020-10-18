import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card';

class Column extends React.Component {

    state = {
        cards: this.props.cards || [],
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.title}</h3>
                <div>{this.state.cards.map(({ key, ...cardsProps }) => (
                    <Card key={key} {...cardsProps} />
                ))}</div>
            </section >
        )
    }
}

Column.propTypes = {
    titleText: PropTypes.node,
};
export default Column;