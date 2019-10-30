import entriesDOM from "./entriesDOM.js"
import form from "./formFields.js"
import data from "./data.js"

form.buildForm()

data.getJournalEntries().then(entriesDOM.renderJournalEntries)

document.querySelector("#recordEntry").addEventListener("click", () => {

    const regex = /^[a-z0-9/s/(/)/{/}/:/;/.]/i
    if (regex.test(concepts.value)) {
        const journalDate = document.querySelector("#journalDate")
        const concepts = document.querySelector("#concepts")
        const journalEntry = document.querySelector("#journalEntry")
        const mood = document.querySelector("#mood")
    } else {
        window.alert("You better type that again ya ding-dong.")
        return
    }
    const newJournalEntry = {
        "date": journalDate.value,
        "concept": concepts.value,
        "entry": journalEntry.value,
        "mood": mood.value
    }
    console.log(journalDate.value, concepts.value, journalEntry.value, mood.value)
    console.log(newJournalEntry)
    data.saveJournalEntry(newJournalEntry)
    .then(data.getJournalEntries)
    .then(entriesDOM.renderJournalEntries)
}
)