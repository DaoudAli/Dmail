import React from "react";
import "./Mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router-dom";
import PrintIcon from "@material-ui/icons/Print";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../features/mailSlice";
function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="mail">
      <div className="mailTools">
        <div className="mailToolsLeft">
          <Tooltip title="Go Back">
            <IconButton onClick={() => history.push("/")}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Reply">
            <IconButton>
              <UndoIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Forward">
            <IconButton>
              <RedoIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="mailToolsRight">
          <Tooltip title="Print Email">
            <IconButton>
              <PrintIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="mailBody">
        <div className="mailBodyHeader">
          <h2>{selectedMail.subject}</h2>
          <LabelImportantIcon className="mailImportant" />
          <p>{selectedMail.title}</p>
          <p className="mailTime">{selectedMail.time}</p>
        </div>
        <div className="mailMessage">
          <p>{selectedMail.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
