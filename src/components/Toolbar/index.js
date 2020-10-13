import React from 'react';
import './style.css';
import reply from '../../assets/ic_reply.svg';
import share from '../../assets/ic_share.svg';
import like from '../../assets/ic_like.svg';
import tag from '../../assets/ic_tag.svg';

function Toolbar(props) {
    return (
        <div className="Toolbar-Macro-Container">
            <div className="Toolbar-Sub-Container">
                <div className="Toolbar-item-Container">
                    <img className="Toolbar-item-Icon" src={reply}/>
                    <span className="Toolbar-item-Label">999</span>
                </div>
                <div className="Toolbar-item-Container">
                    <img className="Toolbar-item-Icon" src={like}/>
                    <span className="Toolbar-item-Label">999</span>
                </div>
                <div className="Toolbar-item-Container">
                    <img className="Toolbar-item-Icon" src={share}/>
                </div>               
            </div>
            <div className="Toolbar-item-Tag">
                <img className="Toolbar-item-Icon" src={tag}/>
                <span className="Toolbar-item-Label">Opinion</span>
            </div>
        </div>
    )
};

export default Toolbar;