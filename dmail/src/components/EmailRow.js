import React from "react";
import "./EmailRow.css";
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import StarIcon from "@material-ui/icons/Star";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMail,
  selectInbox,
  setInbox,
  setTrash,
  selectTrash,
  setStarred,
  selectStarred,
} from "../features/mailSlice";
function EmailRow({ title, subject, description, time, id, starred }) {
  const inbox = useSelector(selectInbox);
  const starredMails = useSelector(selectStarred);
  const trash = useSelector(selectTrash);
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
        title,
        subject,
        description,
        time,
        id,
      })
    );
    history.push("/mail");
  };

  const starMailHandler = () => {
    //Star or Un-Star selected email and update Redux state

    //Create deep copies of Inbox/Starred states to modify
    let updatedInbox = [];
    let updatedStarred = [];
    inbox.map((item) => updatedInbox.push(Object.assign({}, item)));
    starredMails.map((item) => updatedStarred.push(Object.assign({}, item)));

    console.log("Inbox: " + inbox);

    //Update Inbox/Starred
    updatedInbox.map((email) => {
      if (email._id == id) {
        if (email.starred) {
          email.starred = false;
          updatedStarred = updatedStarred.filter((item) => item._id != id);
        } else {
          email.starred = true;
          updatedStarred.push(email);
        }
      }
    });

    dispatch(setStarred(updatedStarred));
    dispatch(setInbox(updatedInbox));
  };
  const deleteMailHandler = () => {
    //Delete selected email and update Redux state

    let updatedInbox = inbox.filter((mailToDelete) => mailToDelete._id != id);
    let deletedMail = {
      sender: title,
      subject: subject,
      message: description,
      time: time,
      _id: id,
    };

    const updatedTrash = Object.assign([], trash); //Could not refer to same Object(trash which is immutable state) and attempt to assign/alter
    updatedTrash.push(deletedMail);

    dispatch(setTrash(updatedTrash));
    dispatch(setInbox(updatedInbox));
  };

  //Manages onClick for an emailRow, won't open mail if icons/buttons in the row are clicked
  const onClickHandler = (e) => {
    if (e.target.toString() === "[object HTMLDivElement]") {
      openMail();
    }
    if (e.target.toString() === "[object HTMLHeadingElement]") {
      openMail();
    }
  };
  return (
    <div className="emailRow" onClick={onClickHandler}>
      <div className="emailRowOptions">
        <Checkbox />
        <IconButton onClick={starMailHandler}>
          {console.log(starred)}
          {starred ? <StarIcon /> : <StarBorderOutlinedIcon />}
        </IconButton>
        <IconButton onClick={deleteMailHandler}>
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
