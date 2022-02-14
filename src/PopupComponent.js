import React from "react";

const PopupComponent = (props) => {

  let [btnClick, setBtnClick] = React.useState(true);

  const MenuToggle = () => {
    setBtnClick(false);
  }

  return (
    <section className={btnClick === true ? 'show' : 'hide'}>
      <div className="popup-overlay">
        <h2 className={props.type}> {props.title} </h2>
        <p>{props.body}</p>
        <button className={props.type} onClick={MenuToggle}> Close</button>
      </div>
    </section>
  )
}
export default PopupComponent;
