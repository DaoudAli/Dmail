import React from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@material-ui/core";
import RedoIcon from "@material-ui/icons/Redo";
import DeleteIcon from "@material-ui/icons/Delete";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./Section";
function EmailList() {
  return (
    <div className="emailList">
      <div className="emailListSettings">
        <div className="emailListSettings_Left">
          <Checkbox />
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailListSections">
        <Section
          Icon={InboxIcon}
          title="Primary"
          color="red"
          selected
        ></Section>
      </div>
    </div>
  );
}

export default EmailList;
