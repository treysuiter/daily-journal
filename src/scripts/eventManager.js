import data from "./data.js"
import entriesDOM from "./entriesDOM.js"

const eventListeners = {

    //Creates event listener to added fields' input to API
    recordEntry() {

        const saveButton = document.querySelector("#recordEntry")

        let hiddenEntryID = document.querySelector("#hiddenID")

        saveButton.addEventListener("click", () => {

            if (hiddenEntryID.value) {

                data.editEntry(hiddenEntryID.value)
                    .then(data.getJournalEntries)
                    .then(entriesDOM.renderJournalEntries)
                    .then(eventListeners.recordEntry)
                    .then(eventListeners.moodFilter)
                    .then(eventListeners.delete)
                    .then(eventListeners.edit)

            } else {

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
            }
        })
    },

    //Create radio buttons with event listeners to filter entires by mood
    moodFilter() {

        const radioButtons = document.getElementsByName("moods")

        radioButtons.forEach(button =>
            button.addEventListener("click", event => {

                const myMood = event.target.value

                data.getJournalEntries()
                    .then(response => {

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
    },

    //Creates event listener for edit button

    edit() {

        const editButtons = document.querySelector("#entryLog")

        let entryID = ""

        editButtons.addEventListener("click", event => {

            if (event.target.id.startsWith("editButton--")) {
                entryID = event.target.id.split("--")[1]
                data.updateEntry(entryID)
            }
        })
    },

    //Creates an event listener for search field

    searchEntires() {

        const searchField = document.querySelector("#searchField")

        searchField.addEventListener("keyup", event => {

            let enterKey = event.which || event.keyCode

            if (enterKey === 13) {

                const mySearch = event.target.value

                data.getJournalEntries()


                    .then(response => {
                        const newArray = []
                        response.forEach(entry => {
                            for (let value of Object.values(entry)) {
                                let testString = value.toString()
                                if (testString.includes(mySearch)) {
                                    newArray.push(entry)
                                    break
                                }
                            }

                        })
                        entriesDOM.renderJournalEntries(newArray)
                    })


            }
        }
        )
    }
}
export default eventListeners