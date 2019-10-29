const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },
    saveJournalEntry(journalEntry) {
        fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntry)
        }
        )
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