
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
        console.log(entryID)
        return fetch(`http://localhost:8088/entries/${entryID}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }

}

export default API

// fetch("http://127.0.0.1:8088/entries") // Fetch from the API
//     .then(entries => entries.json())  // Parse as JSON
//     .then(parsedEntries => {
//         console.log(parsedEntries)
//         const journalEntries = parsedEntries
//         renderJournalEntries(journalEntries)
//         // What should happen when we finally have the array?
//     })