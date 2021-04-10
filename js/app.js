/* ============= SHOW MENU BAR =============== */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            console.log('Hello World');

            // Add the show-menu class to the div tag with the nav-links class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('menu-toggler','nav-links')