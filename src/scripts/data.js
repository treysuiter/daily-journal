
const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },
    saveJournalEntry(journalEntry) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntry)
        }
        )
    },
    getAndSaveEntries(journalEntry) {
        this.getJournalEntries.then(this.saveJournalEntry(journalEntry))
    },
    deleteEntry(entryID) {
        return fetch(`http://localhost:8088/entries/${entryID}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    updateEntry(entryID) {

        const hiddenID = document.querySelector("#hiddenID")
        const newDate = document.querySelector("#journalDate")
        const newConcept = document.querySelector("#concepts")
        const newEntry = document.querySelector("#journalEntry")
        const newMood = document.querySelector("#mood")

        return fetch(`http://localhost:8088/entries/${entryID}`)
            .then(response => response.json())
            .then(thisEntry => {
                hiddenID.value = thisEntry.id
                newDate.value = thisEntry.date
                newConcept.value = thisEntry.concept
                newEntry.value = thisEntry.entry
                newMood.value = thisEntry.mood
            })
    },
    editEntry(entryID) {
        return fetch(`http://localhost:8088/entries/${entryID}`)
    }

}

export default API