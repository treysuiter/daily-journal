import entriesDOM from "./entriesDOM.js"
import form from "./formFields.js"
import data from "./data.js"

form.buildForm()

data.getJournalEntries().then(entriesDOM.renderJournalEntries)

document.querySelector("#recordEntry").addEventListener("click", () => {

    const journalDate = document.querySelector("#journalDate")
    const concepts = document.querySelector("#concepts")
    const journalEntry = document.querySelector("#journalEntry")
    const mood = document.querySelector("#mood")

    const regex = /[^a-z0-9\s\(\)\{\}\:\;\.]/i
    console.log("entry flag", journalEntry.value, regex.test(journalEntry.value))
    console.log("concepts flag", concepts.value, regex.test(concepts.value))
    if (!regex.test(journalEntry.value) && journalEntry.value && !regex.test(concepts.value) && concepts.value) {
        const newJournalEntry = {
            "date": journalDate.value,
            "concept": concepts.value,
            "entry": journalEntry.value,
            "mood": mood.value
        }
        // console.log(journalDate.value, concepts.value, journalEntry.value, mood.value)
        // console.log(newJournalEntry)
        data.saveJournalEntry(newJournalEntry)
            .then(data.getJournalEntries)
            .then(entriesDOM.renderJournalEntries)
    } else {
        window.alert("You better type that again ya ding-dong.")
        return
    }
})
