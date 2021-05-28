import React from 'react';
import './style.css';
import { SettingsContext } from '../Contexts';
const Settings = (props) => {
  return (
    <SettingsContext.Consumer>
      {({ urlBackground, saveToLocalStorage, updateBackgroundUrl }) => {
        let desiredComponent = null;
        switch (props.displayType.displayType) {
          case 'Settings':
            desiredComponent = (
              <div className={`SettingsContainer ${props.displayState.display}`}>
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
                      props.displayState.setDisplay('SlideOutHorizontalRight');
                    }}
                  >
                    SAVE
                  </button>
                  <button
                    className="SettingsButton"
                    onClick={() => {
                      props.displayState.setDisplay('SlideOutHorizontalRight');
                    }}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            );
            break;
          case 'ProfileSettings':
            desiredComponent = <div className="red">dog</div>;
            break;
          default:
            desiredComponent = null;
            break;
        }
        console.log(desiredComponent);
        return desiredComponent;
      }}
    </SettingsContext.Consumer>
  );
};

export default Settings;
