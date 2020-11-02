import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.header.icon_cat} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{settings.header.navlink_home}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{settings.header.navlink_info}</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>{settings.header.navlink_faq}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
export default Header;