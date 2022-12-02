import { useState } from "react";
import Content from "./Content.jsx";
import data from "../../data.json";
function Comment(props) {
  function addNewReply(newReply) {
    setReplies((prevReplies) => {
      return [...prevReplies, newReply];
    });
  }
  function deleteReply(id) {
    setReplies((prevReplies) => {
      return prevReplies.filter((reply) => reply.id != id);
    });
  }
  //   ________________________________________________

  const current_user = data["currentUser"];
  // console.log(current_user);
  //   ----------------------------------------------
  const main_comment = props.comment;
  // ------------------------------------------------
  const [replies, setReplies] = useState(props.comment["replies"]);
  const reply_objects = replies.map((reply) => (
    <Content
      key={reply["id"]}
      content={reply}
      isReply={true}
      current_user={current_user}
      handleReply={addNewReply}
      deleteReply={deleteReply}
    ></Content>
  ));

  return (
    <section className="comment">
      <Content
        content={main_comment}
        isReply={false}
        current_user={current_user}
        handleReply={addNewReply}
      ></Content>
      {replies.length > 0 && (
        <section className="comment-replies">{reply_objects}</section>
      )}
    </section>
  );
}

export default Comment;
