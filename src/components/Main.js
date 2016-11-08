import React from 'react';
import 'normalize.css/normalize.css';
import style from 'styles/App.css';
import yeomanImage from '../images/yeoman.png';

class AppComponent extends React.Component {
  render() {
    return (
      <div className={style.index}>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className={style.notice}>Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
