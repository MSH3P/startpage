import React, { useState } from 'react';
import './style.css';
import { Add, Settings } from './graphics';
import SettingsContext from '../Contexts';
const TaskbarButton = (props) => {
    console.log(props.color);
    const defaultColor = props.color ? props.color['defaultColor'] : '#fff5c4';
    const selectionColor = props.color
        ? props.color['selectionColor']
        : '#4f4c3e';
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

const Taskbar = () => {
    return (
        <div className="Taskbar">
            <div className="CenterDiv"></div>
            <div className="MiddleDiv">
                <div className="CenterDiv">
                    <TaskbarButton svg={Add} id="AddButton" />
                </div>
                <div className="CenterDiv"></div>
            </div>
            <div className="CenterDiv">
                <SettingsContext.Consumer>
                    {({ show, setShow }) => (
                        <TaskbarButton
                            svg={Settings}
                            id="SettingsButton"
                            onClick={() => {
                                setShow(
                                    show == 'SlideIn' ? 'SlideOut' : 'SlideIn'
                                );
                            }}
                        />
                    )}
                </SettingsContext.Consumer>
            </div>
        </div>
    );
};

export default Taskbar;
