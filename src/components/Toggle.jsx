import React from "react";

const Toggle = () => {
  return (
    <div>
      <div className="btn-container">
        <label className="switch btn-color-mode-switch">
          <input value="1" id="color_mode" name="color_mode" type="checkbox" />
          <label
            className="btn-color-mode-switch-inner"
            data-off="Monthly"
            data-on="Annually"
            htmlFor="color_mode"
          ></label>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
