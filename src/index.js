import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Background from './Background';
import Content from './Content';
//import Clock from './Clock';
import Settings from './Settings';
import './style.css';
import Taskbar from './Taskbar';
import SettingsContext from './Contexts';

const App = () => {
    const [show, setShow] = useState('Hidden');
    return (
        <SettingsContext.Provider value={{ show: show, setShow: setShow }}>
            <div className="MainAppContainer">
                <Background />
                <Content />
                <Settings />
                <Taskbar />
            </div>
        </SettingsContext.Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
