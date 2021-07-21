function Message(props) {
  return (
    <div>
      {props.msg.auth}: {props.msg.text}
    </div>
  );
}

export default Message;
