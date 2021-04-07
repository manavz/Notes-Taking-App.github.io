
showNotes();

//if user add a note, add it to loaclstorage

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function(e){

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    showNotes();
})

// function to show element from localstorage
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element, index){
        html += `
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <Button id="${index}" onclick="deleteNote(this.id)" href="#" class="btn btn-primary">Delete Note</Button>
                </div>
            </div>
        `;
    });
    let notesElm = document.getElementById('notes');
    if(notesobj.length != 0){
        notesElm.innerHTML = html;
    }else{
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

//function to delete the note
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

search = document.getElementById("searchTxt");
search.addEventListener("input", function(){

    let inputVal = search.value;
    let noteCard = document.getElementsByClassName("noteCard")
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
