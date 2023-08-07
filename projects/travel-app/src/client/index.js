import { formHandler } from "./js/formHandler";
import { updateUi } from "./js/updateUi";
import { geonamesApi } from "./js/callGeonamesApi";
import { pixabayApi } from "./js/callPixabayApi";
import { weatherbitApi } from "./js/callWeatherbitApi";

import "./styles/style.scss";

// addEventListener for "click" on button "generate"
document.getElementById("submit").addEventListener("click", formHandler);

export { formHandler, updateUi, geonamesApi, pixabayApi, weatherbitApi };

// Add function to refresh page
function reloadPage()
{
location.reload();
};