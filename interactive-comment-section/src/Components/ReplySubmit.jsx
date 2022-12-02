import React from "react";
function ReplySubmit(props) {
  // ----- props -----
  // current_user
  // comment_owner
  // handleReply - func
  // toggleReplySection - func

  const [formData, setFormData] = React.useState({
    reply: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newReply = {
      id: 5, //should be fixed
      content: formData.reply,
      createdAt: "2 days ago",
      score: 0,
      replyingTo: props.comment_owner["username"],
      user: {
        image: props.current_user["image"],
        username: props.current_user["username"],
      },
    };
    props.handleReply(newReply);
    props.toggleReplySection();
    console.log(formData);
  }
  return (
    <div className="content reply-section">
      <img
        className="content-profile"
        src={props.current_user["image"]["webp"]}
      ></img>
      <form className="form-reply" onSubmit={handleSubmit}>
        <textarea
          value={formData.reply}
          placeholder=""
          onChange={handleChange}
          name="reply"
        />
        <button>Reply</button>
      </form>
    </div>
  );
}
export default ReplySubmit;
