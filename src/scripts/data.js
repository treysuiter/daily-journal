
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
    }

}

export default API