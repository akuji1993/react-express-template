import React from 'react';
import style from './App.scss';
import Test from './Test'; 

class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <Test>bla bla bla </Test>
      </div>
    );
  }
}

export default App;
