// Configuration de Back4App
const BACK4APP_APPLICATION_ID = "YBahylKUfN5KUJTEx5i78YR7GXmMLF5hbTEnHudl"
const BACK4APP_JAVASCRIPT_KEY = "h2Fz4wXX6C5MQPyhWm7JumYK0eoeUoqjORDSdabs"
const BACK4APP_SERVER_URL = "https://parseapi.back4app.com"

// Initialisation de Parse
function initializeParse() {
  Parse.initialize(BACK4APP_APPLICATION_ID, BACK4APP_JAVASCRIPT_KEY)
  Parse.serverURL = BACK4APP_SERVER_URL
  console.log("Back4App connecté avec succès!")
}

// Import Parse
import Parse from "parse"

// Exporter les fonctions et constantes
window.initializeParse = initializeParse
window.BACK4APP_APPLICATION_ID = BACK4APP_APPLICATION_ID
window.BACK4APP_JAVASCRIPT_KEY = BACK4APP_JAVASCRIPT_KEY
window.BACK4APP_SERVER_URL = BACK4APP_SERVER_URL
