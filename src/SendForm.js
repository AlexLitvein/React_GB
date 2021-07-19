import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
          <label>Author</label>
          <input className="author flxItm" type="text" value={author} onChange={handleChange}></input>
        </Grid>
        <Grid className="flxCont" item xs={12}>
          <label>Text</label>
          <textarea ref={inputRef} className="flxItm" type="text" value={text} onChange={handleText}></textarea>
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