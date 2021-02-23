
export function getButtons(){
    const leatherButtons = document.getElementsByClassName("leather-button");
    return leatherButtons
}
export function getClickedButtons(){
    const clickedButtons = document.getElementsByClassName("leather-button-clicked");
    return clickedButtons
}
export function setClicked() {
    let zoom = this.parentElement;
    let contentzone = zoom.parentElement;
    this.classList.toggle("leather-button-clicked")
    contentzone.classList.toggle("content-zone-clicked")
    zoom.classList.toggle("zoom-text-clicked")
}

export function addListener(props) {
    for (const item of props) {
        item.addEventListener("click", setClicked);
    }
}