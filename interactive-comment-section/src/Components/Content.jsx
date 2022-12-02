import { useState } from "react";
import ReplySubmit from "./ReplySubmit";
// ---------------------------------------------
import reply_btn from "./images/icon-reply.svg";
import edit_btn from "./images/icon-edit.svg";
import delete_btn from "./images/icon-delete.svg";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";

// Reply & Comment
function Content(props) {
  const isCurrentUser =
    props.current_user["username"] === props.content["user"]["username"];
  // --------------------------------------------------
  const [score, setScore] = useState(props.content["score"]);
  function add() {
    setScore((prev) => prev + 1);
  }
  function subtract() {
    setScore((prev) => prev - 1);
  }
  // --------------------------------------------------
  // content can be updated. so it should be kept in a state.
  const [mainContent, setMainContent] = useState(props.content["content"]);
  function handleUpdate(event) {
    event.preventDefault();
    setMainContent(editForm);
    setShowEditSection(false);
  }
  // --------------------------------------------------
  const [editForm, setEditForm] = useState(mainContent);
  function handleChange(event) {
    setEditForm(event.target.value);
  }
  // --------------------------------------------------
  const [showReplySection, setShowReplySection] = useState(false);
  function toggleReplySection() {
    setShowReplySection((prev) => !prev);
  }
  // --------------------------------------------------
  const [showEditSection, setShowEditSection] = useState(false);
  function toggleEditSection() {
    setShowEditSection((prev) => !prev);
  }
  // --------------------------------------------------
  const [showDeleteBox, setShowDeleteBox] = useState(false);
  function toggleDeleteBox() {
    setShowDeleteBox((prev) => !prev);
  }
  return (
    <>
      <div className="content">
        <section className="content-head">
          <img
            className="content-profile"
            src={props.content["user"]["image"]["webp"]}
          ></img>
          <strong className="content-username">
            {props.content["user"]["username"]}
          </strong>
          {isCurrentUser && <strong className="you-badge">you</strong>}
          <p>{props.content["createdAt"]}</p>
          {/* <button></button> */}
        </section>
        <p className="content-content">
          <strong className="content-mention">
            {props.isReply && "@" + props.content["replyingTo"] + " "}
          </strong>
          {/* if user wants to edit the comment the content of the comment wil be replaced 
          by a form that allow user to edit. */}
          {showEditSection ? (
            <form onSubmit={handleUpdate}>
              <textarea
                value={editForm}
                // placeholder="Comments"
                onChange={handleChange}
                name="commentUpdate"
              />
              <button>Update</button>
            </form>
          ) : (
            mainContent
          )}
        </p>
        <section className="content-interactions">
          <section className="content-score">
            <img src={plus} onClick={add}></img>
            <p className="score">
              <strong>{score}</strong>
            </p>
            <img src={minus} onClick={subtract}></img>
          </section>
          {/* buttons at the end of the section */}
          {!isCurrentUser && (
            <button className="content-btn" onClick={toggleReplySection}>
              <img src={reply_btn}></img>
              <strong className="reply-btn-txt">Reply</strong>
            </button>
          )}
          {/* if this is the user that logged in, show "edit" and "delete" button instead of "reply" */}
          {isCurrentUser && (
            <button className="content-btn" onClick={toggleEditSection}>
              <img src={edit_btn}></img>
              <strong className="edit-btn-txt">Edit</strong>
            </button>
          )}
          {isCurrentUser && props.isReply && (
            <button className="content-btn" onClick={toggleDeleteBox}>
              <img src={delete_btn}></img>
              <strong className="del-btn-txt">Delete</strong>
            </button>
          )}
        </section>
      </div>

      {showReplySection && (
        <ReplySubmit
          current_user={props.current_user}
          comment_owner={props.content["user"]}
          handleReply={props.handleReply}
          toggleReplySection={toggleReplySection}
        />
      )}
      {showDeleteBox && (
        <button
          className="content-btn"
          onClick={() => props.deleteReply(props.content["id"])}
        >
          {/* <img src={delete_btn}></img> */}
          <strong>Yes, delete</strong>
        </button>
      )}
    </>
  );
}
export default Content;
