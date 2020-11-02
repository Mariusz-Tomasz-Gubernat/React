import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { Info_Store } from '../../data/dataStore';
import styles from './Info.scss';
const Info = () => (
  <Container>
    <h1 className={styles.title}>{Info_Store.title}</h1>
    <Hero image={Info_Store.hero_image} titleText={Info_Store.title_image} />
    <p>{Info_Store.content}</p>
  </Container>
);

export default Info;