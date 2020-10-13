import React from 'react';
import './style.css';
import chevron from '../../assets/chevron-right.svg';
import Toolbar from '../Toolbar';

function Reply(props) {
    const date = props.date.split("T")[0]
    const time = props.date.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1")


    var full_date = date.concat(" at: " + time);

    return (
        <>
            <span className="Message-Reply-Header-Label">Replies</span>
            <div className="Reply-Background-Macro">
                <div className="Reply-Background-Sub-Macro">
                    <div className="Reply-Reply-Line-Container">
                        <div className="Reply-Avatar-Container" >
                            <img className="Reply-Avatar"
                                src={props.avatar} />
                        </div>
                        <div className="Reply-Reply-Line-Sub-Container">
                            <div className="Reply-Reply-Line" />
                            <div className="Reply-Reply-Line-Spacer" />
                        </div>
                    </div>

                    <div className="Reply-Content-Container">

                        <div className="Reply-Header-Container">
                            <div className="Reply-Date-Container">
                                <span className="Reply-User-Name">{props.name}</span>
                            </div>
                            <div className="Reply-Date-Container">
                                <span className="Reply-Date">{full_date}</span>
                            </div>
                        </div>
                        <div>
                            <span className="Reply-Text">
                                {props.children}
                            </span>
                            <Toolbar />
                        </div>

                    </div>
                </div>
            </div>
        </>


    )
}

export default Reply;
