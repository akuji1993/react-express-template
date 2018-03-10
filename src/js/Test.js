import React from 'react';

class Test extends React.Component {

  render() {
    return (
      <div>
        Hallo
        {this.props.children}
      </div>
    );
  }
}

export default Test;
