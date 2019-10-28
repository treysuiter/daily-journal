
import entryHTML from "./entryComponent.js"

const journalContainer = document.querySelector("#entryLog")

const entriesDOM = {

    renderJournalEntries: (entries) => {
        let journalHTML = ""
        for (let i = 0; i < entries.length; i++) {
            journalHTML += entryHTML.makeJournalEntryComponent(entries[i])
        }
        journalContainer.innerHTML = journalHTML
    }
}

export default entriesDOM