// selector variables
const gallery_slides_content_selector = ".hero .gallery .slider .slide-wrapper .content"

var slide_selectors = [
    [
        gallery_slides_content_selector + ".slide1 div",
        gallery_slides_content_selector + ".slide1 p:nth-child(2)",
        gallery_slides_content_selector + ".slide1 p:nth-child(3)",
        gallery_slides_content_selector + ".slide1 p:nth-child(4)",
        gallery_slides_content_selector + ".slide1 a",
    ],
    [
        gallery_slides_content_selector + ".slide2 div",
        gallery_slides_content_selector + ".slide2 p:nth-child(2)",
        gallery_slides_content_selector + ".slide2 p:nth-child(3)",
        gallery_slides_content_selector + ".slide2 a",
    ],

]
    

// Nodes variables
const hero_gallery_next = document.querySelector (".hero .gallery .right")
const hero_gallery_back = document.querySelector (".hero .gallery .left")
const gallery_first_image = document.querySelector (".hero .gallery .slider .slide-wrapper:first-child")
const gallery_slides_content = document.querySelectorAll (gallery_slides_content_selector)
const gallery_images = ["gallery 1.jpg", "gallery 2.jpg"]

// Control variables
var current_image = 0
var gallery_runnig = false
var anim_time = 1

anim_slides_initial ()

// Load screen animation of first slide content
anim_slide_in ()

// Click in next button
hero_gallery_next.addEventListener ("click", function (e) {
    hero_gallery_event (direction="next")
})

// Click in back button
hero_gallery_back.addEventListener ("click", function (e) {
    hero_gallery_event (direction="back")
})

async function hero_gallery_event (direction) {

    if (! gallery_runnig) {
        // Update status
        gallery_runnig = true

        // Fade out of the current slide content
        await anim_slides_out ()
    
        if (direction=="next") {
            // Incress image counter
            current_image ++
            if (current_image >= gallery_images.length) {
                current_image = 0
            }
        } else {
            // Decress image counter
            current_image --
            if (current_image < 0 ) {
                current_image = gallery_images.length - 1
            }
        }
    
        // Update image
        await gallery_update ()

        // Slide in animations
        await anim_slide_in ()
    }

}

async function gallery_update () {

    // Start fade
    hero_gallery_next.setAttribute ("disabled", true)
    hide_slides_content ()

    // Calculate margin and set it for slide
    let margin_feft = -100*current_image + "vw"
    gallery_first_image.style.marginLeft = margin_feft

    // End fade
    await sleep (anim_time/2)
    hero_gallery_next.removeAttribute ("disabled")
    gallery_slides_content[current_image].classList.remove ("hide")

    // Update status
    gallery_runnig = false
}

function hide_slides_content () {
    for (let gallery_slide_content of gallery_slides_content) {
        gallery_slide_content.classList.add ("hide")
    }
}


async function anim_slide_in () {
    
    // Loop for each selector 
    for (let slide_selector of slide_selectors[current_image]) {

        // Anime each internal element
        anime({
            targets: slide_selector,
            translateX: 5,
            opacity: 1
        });

        // Wait after each animation
        await sleep (anim_time/5)
    }
}

async function anim_slides_out () {

 
    // Loop for each selector 
    for (let slide_selector of slide_selectors[current_image]) {

        // Anime each internal element
        anime({
            targets: slide_selector,
            translateX: -5,
            opacity: 0
        });

        // Wait after each animation
        await sleep (anim_time/5/2)
    }  
}

async function anim_slides_initial () {
    // set initial opacity for animations
    for (let slides of slide_selectors) {
        for (let slide_selector of slides) {
            anime({
                targets: slide_selector,
                translateX: 5,
                opacity: 0
            });
        }
    }
}