import displayHeader from "./displayHeader";
import './styles.css'
import handleUserInput from "./handleUserInput";
import displayPage from "./displayPage";

(() => {
    displayHeader();
    displayPage();
    handleUserInput();
})();