import React from 'react';
import ReactDOM from 'react-dom';
import Background from './Background/';
import Content from './Content/';
//import Clock from './Clock';
import Settings from './Settings/';
import './style.css';
import Taskbar from './Taskbar/';
import { SettingsContextProvider } from './Contexts/';

const App = () => {
  const [show, setShow] = React.useState('Hidden');

  return (
    <SettingsContextProvider>
      <div className="MainAppContainer">
        <div className="BackgroundContainer">
          <Background />
        </div>

        <div className="ContentContainer">
          <Content />
          <Settings showState={{ show, setShow }} />
          <Taskbar showState={{ show, setShow }} />
        </div>
      </div>
    </SettingsContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
