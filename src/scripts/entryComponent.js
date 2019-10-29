// const journalEntry = {

//     date: "07/24/2018",
//     concept: "Array methods",
//     entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
//     mood: "Ok"

// }

const entryHTML = {
    makeJournalEntryComponent: (journalEntry) => {
        return `
    <div class="entry">
        <h1>${journalEntry.concept}</h1>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.date}</p>
    </div> `
    }
}

export default entryHTML