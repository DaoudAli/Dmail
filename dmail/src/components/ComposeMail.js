import React from "react";
import "./ComposeMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

function ComposeMail() {
  return (
    <div className="composeMail">
      <div className="composeMailHeader">
        <h3>New Message</h3>
        <CloseIcon className="composeMailClose" />
      </div>

      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <div className="composeMailOptions">
          <Button>Send</Button>
        </div>
      </form>
    </div>
  );
}

export default ComposeMail;
