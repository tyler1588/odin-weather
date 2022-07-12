import displayWeatherData from "./displayWeatherData";
import displayHeader from "./displayHeader";
import './styles.css'
import handleUserInput from "./handleUserInput";
import getWeatherData from "./getWeatherData";
import parseWeatherData from "./parseWeatherData";

(() => {
    displayHeader();
    handleUserInput();
})();