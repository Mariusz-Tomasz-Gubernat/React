import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { FAQ_Store } from '../../data/dataStore';
import styles from './FAQstyles.scss';
const FAQ = () => (
  <Container>
    <h1 className={styles.title}>{FAQ_Store.title}</h1>
    <Hero image={FAQ_Store.hero_image} titleText={FAQ_Store.title_image} />
    <h3>{FAQ_Store.subtitle}</h3>
    <p>{FAQ_Store.content}</p>
  </Container>
);

export default FAQ;