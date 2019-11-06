export default {

    //!I done turned this into something pretty

    buildForm: () =>

        document.querySelector(".mainContainer").innerHTML = /*html*/`
        <h1 class="mx-auto">Daily Journal</h1>
        <form class=" bs4-d-flex flex-column mx-auto bd-highlight mb-3 w-50 p-3" action="">
        <input id="hiddenID" value="">
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
            <button class="btn btn-outline-primary" type="button" id="recordEntry">Save</button>
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
        <article class="d-flex flex-wrap" id="entryLog">
        </article>`
}