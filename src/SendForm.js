import React from "react";
// import Box from '@material-ui/core/Box';
import { Grid, TextField, Button } from '@material-ui/core';

function SendForm(props) {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);


  const [author, setAuthor] = React.useState("Vasa");
  const handleChange = (event) => {
    setAuthor(event.target.value);
  };

  const [text, setText] = React.useState("cook");
  const handleText = (event) => {
    setText(event.target.value);
  };

  return (

    <Grid className="send-form brd" container>
      <Grid container item xs={10}>
        <Grid className="flxCont" item xs={12}>         
          <TextField
            className="flxItm"
            id="standard-basic"
            label="Author"
            value={author}
            onChange={handleChange}
          />         
        </Grid>
        <Grid className="flxCont" item xs={12}>         
          <TextField
            className="flxItm"
            id="standard-multiline-flexible"
            label="Message"
            multiline
            maxRows={4}
            value={text}
            onChange={handleText}
          />
        </Grid>
      </Grid>
      <Grid className="flxCont" item xs={2}>
        <Button className="flxItm " variant="contained" onClick={() => {
          props.addMessage({ auth: author, text: text });
          inputRef.current?.focus();
        }}>Send</Button>

      </Grid>
    </Grid>

  );
}

export default SendForm;