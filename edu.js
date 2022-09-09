function navdisplay(ref){
    var id = ref.id;
    var state = document.getElementById(id);
    console.log('element id:' + id);
    state.style.display = "none";
    if(state.style.display === "none"){
        state.style.display = "block";
    }
}

function navexit(ref){
    var id = ref.id;
    var state = document.getElementById(id);
    if(state.style.display === "block"){
        state.style.display = "none";
    }
}
