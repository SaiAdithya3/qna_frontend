import React from "react";
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1674/1674883.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Web Development</h5>
          <p>The best Web App Development Company</p>
          <h5>Latest news</h5>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;