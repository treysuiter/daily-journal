
const entryHTML = {
    makeJournalEntryComponent: (journalEntry) => {
        return `
    <div class="border border-warning rounded-lg w-25 p-3 m-2 entry">
        <h3>${journalEntry.concept}</h3>
        <hr>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.date}</p>
        <p>Mood: ${journalEntry.mood}</p>
        <button class="allDeleteButtons" id="deleteButton--${journalEntry.id} ">
            Delete
        </button>
    </div> `
    }
}

export default entryHTML