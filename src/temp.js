import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {

    const myTheme = createTheme({
        // Свойства объекта palette можно посмотреть здесь:
        // https://material-ui.com/ru/customization/default-theme/
        palette: {
            // например:
            background: {
                default: '#009999'
            }
        }
    });

    return (
        <ThemeProvider theme={myTheme}>
            {/* вот эта штука обязательна!!! кто бы мог подумать!!! */}
            <CssBaseline />
            {/* ... ваш рендер ... */}
        </ThemeProvider>
    );
}
export default App;