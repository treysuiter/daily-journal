import entriesDOM from "./entriesDOM.js"
import form from "./formFields.js"
import data from "./data.js"

//Builds initial form

form.buildForm()

//Fetches journal data and places it on the DOM

data.getJournalEntries().then(entriesDOM.renderJournalEntries)

//Creates event listener to added fields' input to API

document.querySelector("#recordEntry").addEventListener("click", () => {

    const journalDate = document.querySelector("#journalDate")
    const concepts = document.querySelector("#concepts")
    const journalEntry = document.querySelector("#journalEntry")
    const mood = document.querySelector("#mood")

    const regex = /[^a-z0-9\s\(\)\{\}\:\;\.]/i

    if (!regex.test(journalEntry.value) && journalEntry.value && !regex.test(concepts.value) && concepts.value) {
        const newJournalEntry = {
            "date": journalDate.value,
            "concept": concepts.value,
            "entry": journalEntry.value,
            "mood": mood.value
        }

        data.saveJournalEntry(newJournalEntry)
            .then(data.getJournalEntries)
            .then(entriesDOM.renderJournalEntries)

    } else {
        window.alert("You better type that again ya ding-dong.")
        return
    }
})

//Create radio buttons to filter entires by mood

const radioButtons = document.getElementsByName("moods")

radioButtons.forEach(button =>
    button.addEventListener("click", event => {

        const myMood = event.target.value

        data.getJournalEntries().then(response => {

            const newArray = response.filter(selectedMood => {

                let match = false

                if (selectedMood.mood === myMood) {
                    match = true
                }
                return match
            })
            entriesDOM.renderJournalEntries(newArray)

        })
    }))

//Creates event listener for delete button then rebuilds the DOM

const deleteButtons = document.querySelector("#entryLog")

deleteButtons.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteButton--")) {
        const entryToDelete = event.target.id.split("--")[1]

        data.deleteEntry(entryToDelete)
        .then(data.getJournalEntries)
        .then(entriesDOM.renderJournalEntries)
    }
})




