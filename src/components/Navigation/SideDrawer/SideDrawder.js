import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = ['side-drawer'];

  if (props.show) {
    drawerClasses = ['side-drawer', 'open'];
  }
  console.log(drawerClasses.join(' '));
  return (
    <nav className={drawerClasses.join(' ')}>
      <ul>
        <li>
          <a href="/">Georges Ryan</a>
        </li>
        <li>
          <a href="/">Camomille</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
