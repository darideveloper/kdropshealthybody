var anim_h_elems = document.querySelectorAll ('[data-aos]')

// Replace horizontal animations for vertical animations
if (window.matchMedia("(max-width: 1220px)").matches) {
    for (let anim_h_elem of anim_h_elems) {
        anim_h_elem.setAttribute ("data-aos-delay", "0")
    }
}