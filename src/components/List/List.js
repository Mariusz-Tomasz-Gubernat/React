import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column.Container';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';

class List extends React.Component {
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  static propTypes = {
    columns: PropTypes.array,
    title: PropTypes.node.isRequired,
    description: PropTypes.node,

    image: PropTypes.node,
    addColumn: PropTypes.func,
  }

  render() {
    const { columns, addColumn, title, image, description } = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn} />
        </div>
        <Container />
      </section>
    );
  }
}
export default List;