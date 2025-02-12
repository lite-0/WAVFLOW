let visible = null;

function show(member) {
    if (visible !== member) {
        if (visible) {
            document.getElementById(visible).style.display = "none";
        }
        document.getElementById(member).style.display = "block";
        visible = member;
    }
}
