export default {

    buildForm: () => {
        document.querySelector(".mainContainer").innerHTML = `
        <h1>Daily Journal</h1>
        <form action="">
            <fieldset>
                <label for "journalDate">Date of Entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
            <fieldset>
                <label for "concepts">Concepts Covered</label>
                <input type="text" name="concepts" id="concepts">
            </fieldset>
            <fieldset>
                <label for "journalEntry">Journal Entry</label>
                <textarea rows="2" cols="20" id="journalEntry"></textarea>
            </fieldset>
            <fieldset>
                <label for "mood">Mood for the Day</label>
                <select id="mood">
                    <option value="maximum">Maximum</option>
                    <option value="medium">Medium</option>
                    <option value="minimum">Minimum</option>
                </select>
            </fieldset>
            <button type="button" id="recordEntry">Record Journal Entry</button>
            <fieldset class="moodFilter">

                <legend>
                Filter Journal Entries by Mood
                </legend>
                <div class="radioButtons">
                <input type="radio" name="moods" id="maximum" value="maximum">
                <label for "maximum">MAX</label>

                <input type="radio" name="moods" id="minimum" value="medium">
                <label for "maximum">MED</label>

                <input type="radio" name="moods" id="minimum" value="minimum">
                <label for "maximum">MIN</label>
                </div>  
            </fieldset>

        </form>
        <article id="entryLog">
        </article>`
    }
}