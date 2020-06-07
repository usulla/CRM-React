import React, { useState } from "react";

const CustomCheckbox = (props) => {
  let [is_checked, setIsChecked] = useState(props.isChecked ? true : false)

  const handleClick = () => {
    setIsChecked(!is_checked);
  }
  const { isChecked, number, label, inline, ...rest } = props;
  const classes =
    inline !== undefined ? "checkbox checkbox-inline" : "checkbox";
  return (
    <div className={classes}>
      <input
        id={number}
        type="checkbox"
        onChange={handleClick}
        checked={is_checked}
        {...rest}
      />
      <label htmlFor={number}>{label}</label>
    </div>
  );
}

export default CustomCheckbox;
