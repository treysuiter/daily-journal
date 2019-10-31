export default {

    buildForm: () => {
        document.querySelector(".mainContainer").innerHTML = `
        <h1>Daily Journal</h1>
        <form class="d-flex flex-column bd-highlight mb-3 class="form-group" action="">
            <fieldset>
                <label for "journalDate">Date of Entry</label>
                <input class="form-control" type="date" name="journalDate" id="journalDate">
            </fieldset>
            <fieldset>
                <label for "concepts">Concepts Covered</label>
                <input class="form-control" type="text" name="concepts" id="concepts">
            </fieldset>
            <fieldset>
                <label for "journalEntry">Journal Entry</label>
                <textarea class="form-control" rows="2" cols="20" id="journalEntry"></textarea>
            </fieldset>
            <fieldset id="moodFieldset">
                <label for "mood">Mood for the Day</label>
                <select class="form-control" id="mood">
                    <option value="maximum">Maximum</option>
                    <option value="medium">Medium</option>
                    <option value="minimum">Minimum</option>
                </select>
            </fieldset>
            <button class="btn btn-outline-primary" type="button" id="recordEntry">Record Journal Entry</button>
            <fieldset class="moodFilter">

                <legend>
                Filter Journal Entries by Mood
                </legend>
                <div class="btn-group btn-group-toggle" data-toggle="buttons" class="radioButtons">
                <input class="form-check" type="radio" name="moods" id="maximum" value="maximum">
                <label for "maximum">MAX</label>

                <input class="form-check" type="radio" name="moods" id="minimum" value="medium">
                <label for "maximum">MED</label>

                <input class="form-check" type="radio" name="moods" id="minimum" value="minimum">
                <label for "maximum">MIN</label>
                </div>  
            </fieldset>

        </form>
        <article class="d-flex flex-wrap"id="entryLog">
        </article>`
    }
}