
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page3Animation(){
    var elemCon = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemCon.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemCon.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
page3Animation()