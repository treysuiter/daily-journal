const journalContainer = document.querySelector("#entryLog")

const renderJournalEntries = (entries) => {
    let journalHTML = ""
    for (let i = 0; i < entries.length; i++) {
        journalHTML += makeJournalEntryComponent(entries[i])
    }
    journalContainer.innerHTML = journalHTML
}