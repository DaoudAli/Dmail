import React from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@material-ui/core";
import RedoIcon from "@material-ui/icons/Redo";
import DeleteIcon from "@material-ui/icons/Delete";
import InboxIcon from "@material-ui/icons/Inbox";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import Section from "./Section";
import EmailRow from "./EmailRow";
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
          selected={true}
        ></Section>
        <Section
          Icon={NotInterestedIcon}
          title="Spam"
          color="Blue"
          selected={false}
        ></Section>
      </div>

      <div className="emailListRows">
        <EmailRow title="TEST" subject="hi" description="desc" time="1:11pm" />

        <EmailRow title="TEST" subject="hi" description="desc" time="1:11pm" />
      </div>
    </div>
  );
}

export default EmailList;
