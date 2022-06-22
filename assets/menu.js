function dropDown() {
    document.getElementById("project").classList.toggle("show");
}


window.onclick = function(event) {
    if (event.target.matches('.buttonMenu') == false) {
        let dropdowns = document.getElementsByClassName("listMenu");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}