function Message(props) {
  return (
    <div>
      {props.show && props.msg.auth}{props.show && ': '}{props.msg.text}
    </div>
  );
}

export default Message;
