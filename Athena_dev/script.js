function clickMenu() {
    let menu = document.getElementById('menu')
    console.log(menu)
    if (menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
}