import React, { useState } from 'react';
import './style.css';
import SettingsContext from '../Contexts/';
const Settings = (props) => {
    const state = {
        false: 'SlideIn',
        true: 'SlideOut',
        null: 'Hidden',
    };

    return (
        <SettingsContext.Consumer>
            {({ show, setShow }) => (
                <div className={`SettingsContainer ${show}`}>
                    <p className="Title">Settings</p>
                </div>
            )}
        </SettingsContext.Consumer>
    );
};

export default Settings;
