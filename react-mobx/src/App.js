import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';

const App = inject('theme')(
  observer(
    class App extends Component {
      constructor(props) {
        super(props);
      }

      componentWillReceiveProps(nextProps) {
        console.log(nextProps.theme.theme);
      }

      render() {
        return (
          <div className={this.getStyle()}>
            <h1>React - Mobx</h1>
            <span className='emojie' role='img'>
              {' '}
              👻
            </span>
            <div onClick={this.toggleTheme}>Toggle Theme</div>
          </div>
        );
      }

      toggleTheme = () => {
        this.props.theme.setTheme();
      };

      getStyle = () => {
        return this.props.theme.theme ? 'App dark' : 'App';
      };
    }
  )
);

export default App;
