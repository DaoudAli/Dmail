import React from "react";
import "./EmailRow.css";
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function EmailRow({ title, subject, description, time, id }) {
  const history = useHistory();
  return (
    <div className="emailRow" onClick={() => history.push("/mail")}>
      <div className="emailRowOptions">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <DeleteOutlineIcon />
        </IconButton>
      </div>
      <h3 className="emailRowTitle">{title}</h3>
      <div className="emailRowMessage">
        <h4>
          {subject} <span className="emailRowDescription">- {description}</span>
        </h4>
      </div>
      <div className="emailRowTime">{time}</div>
    </div>
  );
}

export default EmailRow;
