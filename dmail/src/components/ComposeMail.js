import React from "react";
import "./ComposeMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";

function ComposeMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  };

  const dispatch = useDispatch();

  return (
    <div className="composeMail">
      <div className="composeMailHeader">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="composeMailClose"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="composeMailError">"To" is required</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="composeMailError">"Subject" is required</p>
        )}

        <input
          name="message"
          className="composeMailMessage"
          placeholder="Message"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="composeMailError">"Message" is required</p>
        )}

        <div className="composeMailOptions">
          <Button
            className="composeMailSend"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ComposeMail;
