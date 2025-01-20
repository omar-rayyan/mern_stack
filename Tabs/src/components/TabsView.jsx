import React, { useState } from 'react';
import './TabsView.css';

const TabsView = (props) => {
    const [tabContent, setTabContent] = useState("");
    const [animationClass, setAnimationClass] = useState("");

    const onClickHandler = (e, tab) => {
        setAnimationClass("fade-out");
        setTimeout(() => {
            setTabContent(tab.content);
            setAnimationClass("fade-in");
        }, 300);
    };

    return (
        <>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {props.tabs.map((tab, index) => (
                    <button 
                        key={index} 
                        onClick={(e) => onClickHandler(e, tab)} 
                        className="tab-button"
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <textarea 
                value={tabContent} 
                readOnly 
                className={`tab-content ${animationClass}`} 
            ></textarea>
        </>
    );
};

export default TabsView;