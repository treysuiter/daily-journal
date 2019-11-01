import entriesDOM from "./entriesDOM.js"
import form from "./formFields.js"
import data from "./data.js"
import eventListeners from "./eventManager.js"

//Builds initial form

form.buildForm()

//Fetches journal data and places it on the DOM

data.getJournalEntries().then(entriesDOM.renderJournalEntries)
eventListeners.recordEntry()
eventListeners.moodFilter()
eventListeners.delete()





