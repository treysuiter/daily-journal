
API.getJournalEntries().then(renderJournalEntries)


// const journalEntry = {

//     date: "07/24/2018",
//     concept: "Array methods",
//     entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
//     mood: "Ok"

// }

// const makeJournalEntryComponent = (journalEntry) => {
//     return `
//     <div>
//         <h1>${journalEntry.concept}</h1>
//         <p>${journalEntry.entry}</p>
//         <p>${journalEntry.date}</p>
//     </div> `
// }

// const journalContainer = document.querySelector("#entryLog")

// const renderJournalEntries = (entries) => {
//     let journalHTML = ""
//     for (let i = 0; i < entries.length; i++) {
//         journalHTML += makeJournalEntryComponent(entries[i])
//     }
//     journalContainer.innerHTML = journalHTML
// }


// fetch("http://127.0.0.1:8088/entries") // Fetch from the API
//     .then(entries => entries.json())  // Parse as JSON
//     .then(parsedEntries => {
//         console.log(parsedEntries)
//         const journalEntries = parsedEntries
//         renderJournalEntries(journalEntries)
//         // What should happen when we finally have the array?
//     })
