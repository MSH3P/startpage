import React from 'react';
import './style.css';
import { SettingsContext } from '../Contexts';
const Settings = (props) => {
  return (
    <SettingsContext.Consumer>
      {({ urlBackground, saveToLocalStorage, updateBackgroundUrl }) => (
        <div className={`SettingsContainer ${props.showState.show}`}>
          <p className="Title">Settings</p>
          <div className="TopContainer">
            <input
              storagename="urlBackground"
              className="SettingsInput"
              type="text"
              placeholder="Enter Background URL"
              defaultValue={urlBackground}
            ></input>
          </div>
          <div className="BottomContainer">
            <button
              className="SettingsButton"
              onClick={() => {
                const SettingsItem = document.getElementsByClassName('SettingsInput');

                for (let item of SettingsItem) {
                  if (item.hasAttribute('storagename')) {
                    const storageName = item.getAttribute('storagename');
                    item.value && updateBackgroundUrl(SettingsItem[0].value);
                    saveToLocalStorage(storageName, item.value);
                  }
                }
              }}
            >
              SAVE
            </button>
            <button
              className="SettingsButton"
              onClick={() => {
                props.showState.setShow('SlideOut');
              }}
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </SettingsContext.Consumer>
  );
};

export default Settings;
