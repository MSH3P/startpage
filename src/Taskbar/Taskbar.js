import React, { useState } from 'react';
import './style.css';
import { Add, Settings } from './graphics';
const TaskbarButton = (props) => {
  const defaultColor = props.color ? props.color['defaultColor'] : '#fff5c4';
  const selectionColor = props.color ? props.color['selectionColor'] : '#4f4c3e';
  const [stroke, setStroke] = useState(defaultColor);
  return (
    <div className="TaskbarButtonDiv" id={props.id}>
      <button
        className="SvgButton"
        onMouseEnter={() => {
          setStroke(selectionColor);
        }}
        onMouseLeave={() => {
          setStroke(defaultColor);
        }}
        onClick={props.onClick}
      >
        <props.svg stroke={stroke} />
      </button>
    </div>
  );
};

const Taskbar = (props) => {
  return (
    <div className="Taskbar">
      <div className="CenterDiv"></div>
      <div className="MiddleDiv">
        <div className="CenterDiv">
          <TaskbarButton
            svg={Add}
            id="AddButton"
            onClick={() => {
              props.displayType.setDisplayType('ProfileSettings');
              props.displayState.setDisplay(props.displayState.display === 'SlideInVerticalTop' ? 'SlideOutVerticalTop' : 'SlideInVerticalTop');
            }}
          />
        </div>
        <div className="CenterDiv"></div>
      </div>
      <div className="CenterDiv">
        <TaskbarButton
          svg={Settings}
          id="SettingsButton"
          onClick={() => {
            props.displayType.setDisplayType('Settings');
            props.displayState.setDisplay(
              props.displayState.display === 'SlideInHorizontalRight' ? 'SlideOutHorizontalRight' : 'SlideInHorizontalRight'
            );
          }}
        />
      </div>
    </div>
  );
};

export default Taskbar;
