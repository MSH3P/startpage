import React from 'react';
import { SettingsContext } from '../Contexts';
import './style.css';

const Background = () => {
  return (
    <SettingsContext.Consumer>
      {({ urlBackground }) => {
        console.log('state changed ' + urlBackground);

        const extension = urlBackground.substring(urlBackground.lastIndexOf('.'));

        if (['.png', '.jpg', '.gif'].includes(extension)) {
          return (
            <div className="Background">
              <img alt="backgroundimage" className="BackgroundVideo" src={urlBackground}></img>
            </div>
          );
        }

        return (
          <div className="Background" key={urlBackground}>
            <video autoPlay muted loop className="BackgroundVideo" onContextMenu={(event) => event.preventDefault()}>
              <source src={urlBackground} />
            </video>
          </div>
        );
      }}
    </SettingsContext.Consumer>
  );
};

export default Background;
