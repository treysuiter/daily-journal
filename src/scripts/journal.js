import entriesDOM from "./entriesDOM.js"
import form from "./formFields.js"
import data from "./data.js"
import eventListeners from "./eventManager.js"

//Builds initial form

form.buildForm()

//Fetches journal data and places it on the DOM then adds event listeners

data.getJournalEntries()
.then(entriesDOM.renderJournalEntries)
.then(eventListeners.recordEntry)
.then(eventListeners.moodFilter)
.then(eventListeners.delete)





