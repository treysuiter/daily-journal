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
