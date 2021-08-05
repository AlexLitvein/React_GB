import { createTheme } from "@material-ui/core/styles";
import orange from '@material-ui/core/colors/orange';

const MyTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: orange[500]
      },
      background: {
        default: '#009999'
      }
    }
  });

  export default MyTheme;