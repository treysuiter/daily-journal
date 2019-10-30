
import entryHTML from "./entryComponent.js"



const entriesDOM = {

    renderJournalEntries: (entries) => {
        const journalContainer = document.querySelector("#entryLog")
        let journalHTML = ""
        for (let i = 0; i < entries.length; i++) {
            journalHTML += entryHTML.makeJournalEntryComponent(entries[i])
        }
        journalContainer.innerHTML = journalHTML
    }
}

export default entriesDOM