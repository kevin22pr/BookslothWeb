import React from 'react';
import './style.css';
import chevron from '../../assets/chevron-right.svg';
import Toolbar from '../Toolbar';
import Reply from '../Reply';

function Message(props) {

    const date = props.date.split("T")[0]
    const time = props.date.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1")

    var full_date = date.concat(" at: " + time);

    return (
        <>
            <div className="Message-Background-Sub-Macro">
                <div className="Message-Reply-Line-Container">
                    <div className="Message-Avatar-Container" >
                        <img className="Message-Avatar"
                            src={props.avatar} />
                    </div>
                    <div className="Message-Reply-Line-Sub-Container">
                        <div className="Message-Reply-Line" />
                        <div className="Message-Reply-Line-Spacer" />
                    </div>
                </div>

                <div className="Message-Content-Container">
                    <div className="Message-Header-Container">
                        <div className="Message-Date-Container">
                            <span className="Message-User-Name">{props.name}</span>
                        </div>
                        <div className="Message-Date-Container">
                            <span className="Message-Date">{full_date}</span>
                            <img className="Message-Chevron" src={chevron} />
                        </div>
                    </div>
                    <div className="Message-Text-Container">
                        <p>
                            <span className="Message-Text">
                                {props.children}
                            </span>
                        </p>
                        <Toolbar />
                        <div className="Message-Reply-Div">
                            {
                                props.replies.map(reply => {
                                    return <Reply avatar={reply.avatar} name={reply.full_name} date={reply.date}>
                                        {reply.message}
                                    </Reply>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message;
