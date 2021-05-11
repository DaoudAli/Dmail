import React from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@material-ui/core";
import RedoIcon from "@material-ui/icons/Redo";
import DeleteIcon from "@material-ui/icons/Delete";
import InboxIcon from "@material-ui/icons/Inbox";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import Section from "./Section";
import EmailRow from "./EmailRow";
import {
  selectCurrentUser,
  selectCurrentMailType,
} from "../features/mailSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setInbox,
  setTrash,
  setStarred,
  selectInbox,
  selectTrash,
  selectStarred,
} from "../features/mailSlice";

function EmailList() {
  const currentUser = useSelector(selectCurrentUser);
  const currentMailType = useSelector(selectCurrentMailType);
  const inbox = useSelector(selectInbox);
  const trash = useSelector(selectTrash);
  const starred = useSelector(selectStarred);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/loadInbox", {
      method: "POST",
      body: JSON.stringify({ user: currentUser }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      response.json().then((inboxData) => {
        console.log(inboxData);
        dispatch(setInbox(inboxData.inboxMails));
      });
    });
  }, []);

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
        <EmailRow
          title="DaoudAli@dmail.com"
          subject="Welcome to Dmail!"
          description="Hi! Thanks for using Dmail. Dmail is a personal project I worked on to improve my developer skills. On the frontend it uses React and a few React libraries, such as Redux & React Router. The backend was made with Node & Express and is connected to MongoDB. Thanks for using Dmail! "
          time="1:11pm"
        />

        {/* Render based off currently selected sidebar mail type */}

        {currentMailType === "inbox" ? (
          inbox.map((email) => {
            return (
              <EmailRow
                title={email.sender}
                subject={email.subject}
                description={email.message}
                time={email.time}
                id={email._id}
              />
            );
          })
        ) : (
          <div></div>
        )}

        {currentMailType === "starred" ? (
          starred.map((email) => {
            return (
              <EmailRow
                title={email.sender}
                subject={email.subject}
                description={email.message}
                time={email.time}
                id={email._id}
              />
            );
          })
        ) : (
          <div></div>
        )}

        {currentMailType === "trash" ? (
          inbox.map((email) => {
            return (
              <EmailRow
                title={email.sender}
                subject={email.subject}
                description={email.message}
                time={email.time}
                id={email._id}
              />
            );
          })
        ) : (
          <div></div>
        )}

        <EmailRow title="TEST" subject="hi" description="desc" time="1:11pm" />
      </div>
    </div>
  );
}

export default EmailList;
