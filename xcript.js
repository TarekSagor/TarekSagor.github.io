var title = document.getElementById('head')

var toggle = true

function color() {
    if (toggle) {
        toggle=!toggle
        title.classList.remove('heading1')
        title.classList.add('heading2')
    } else {
        toggle=!toggle
        title.classList.remove('heading2')
        title.classList.add('heading1')
    }

}
