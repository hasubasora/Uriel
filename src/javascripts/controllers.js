function fn(id1, id2) {
    document.addEventListener('click', function(e) {
        if (e.target !== id1) {
            id2.style.display = "none";
        }
    });
    id2.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    id1.addEventListener('click', function(e) {
        var status = id2.style.display;
        if (status === "none") {
            id2.style.display = "block";
        } else {
            id2.style.display = "none";
        }
    });
}
fn(btn, div);