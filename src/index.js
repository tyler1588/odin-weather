import displayHeader from "./displayHeader";
import './styles.css'
import handleUserInput from "./handleUserInput";
import displayPage from "./displayPage";
import displayWeatherData from "./displayWeatherData";

(() => {
    displayHeader();
    displayPage();
    displayWeatherData('Toronto');
    handleUserInput();
})();