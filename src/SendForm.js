import React from "react";
import { Box, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'

const SendForm = (props) => {
  let inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const [author, setAuthor] = React.useState("Vasa");
  const handleChange = (event) => {
    setAuthor(event.target.value);
  };

  const [text, setText] = React.useState("");
  const handleText = (event) => {
    setText(event.target.value);
  };

  const addMessage = () => {
    props.addMessage({ auth: author, text: text });
    inputRef.current?.focus();
    setText('');
  }

  return (
    <Box className="p4 flxCont brd">
      <Box className="flxCont flx-col flx-grw">
        <TextField
          id="standard-basic"
          label="Author"
          value={author}
          onChange={handleChange}
        />
        <TextField
          id="standard-multiline-flexible"
          inputRef={inputRef}
          label="Message"
          multiline
          maxRows={4}
          value={text}
          onChange={handleText}
        />
      </Box>
      <Button className="" variant="contained" onClick={addMessage}>
        Send
      </Button>
    </Box>
  );
}

export default SendForm;