import React from "react";

const MessageComponent = (props) => {

  let [btnClick, setBtnClick] = React.useState(false);

  const ClickyFunction = () => {
    //hide the form?
    (btnClick === false ? setBtnClick(true) : setBtnClick(false))
  }

  return (
    <section>
      <div className="message-overlay"
        style={{ background:`${props.bgcolor}`}} >
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <button onClick={ClickyFunction}> Close</button>
    </div>
    </section >
  )
}
export default MessageComponent;
