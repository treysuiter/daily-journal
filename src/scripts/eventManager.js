import data from "./data.js"
import entriesDOM from "./entriesDOM.js"

const eventListeners = {

//Creates event listener to added fields' input to API
recordEntry() {

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
},

//Create radio buttons with event listeners to filter entires by mood
moodFilter() {

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
},

//Creates event listener for delete button then rebuilds the DOM

delete() {

const deleteButtons = document.querySelector("#entryLog")

deleteButtons.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteButton--")) {
        const entryToDelete = event.target.id.split("--")[1]

        data.deleteEntry(entryToDelete)
        .then(data.getJournalEntries)
        .then(entriesDOM.renderJournalEntries)
    }
})
}
}

export default eventListeners