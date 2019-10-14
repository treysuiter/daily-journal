/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
// const journalEntry = {
//     date: "",
//     concepts: "",
//     entry: "",
//     mood: ""
// }

const journalEntry = {

    date: "07/24/2018",
    concept: "Array methods",
    entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
    mood: "Ok"

}

const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "Learned about arrays",
        mood: "Maximum"
    },
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "Learned about arrays",
        mood: "Maximum"
    }
]

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
    <div>
        <h1>${journalEntry.concept}</h1>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.date}</p>
    </div> `
}



const renderJournalEntries = (entries) => {
    let journalHTML = ""
    for (let i = 0; i < entries.length; i++) {
        journalHTML += makeJournalEntryComponent(entries[i])
    }
    return journalHTML
}

journalHTML = renderJournalEntries(journalEntries)
console.log(journalHTML)
const journalContainer = document.querySelector("#entryLog")
journalContainer.innerHTML = journalHTML


