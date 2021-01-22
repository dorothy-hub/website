var show = 'aboutContent'
var bj = 'bj2'
var showMenu = false
document.getElementById("about").addEventListener("click", showAbout); 
document.getElementById("project").addEventListener("click", showProject); 
document.getElementById("gallery").addEventListener("click", showGallery); 
document.getElementById("contact").addEventListener("click", showContact); 
document.getElementById("nextIcon").addEventListener("click", next); 
document.getElementById("prevIcon").addEventListener("click", prev); 
document.getElementById("menu").addEventListener("click", dropdownMenu); 

function showAbout() {
    if (show != 'aboutContent') {
        let temp = show
        show = 'aboutContent'
        console.log('aaa', show)
        document.getElementById('aboutContent').classList.remove('noshow')
        document.getElementById('aboutContent').classList.add('show')
        document.getElementById(temp).classList.remove('show')
        document.getElementById(temp).classList.add('noshow')
    }
    if(showMenu) dropdownMenu()
}
function showProject() {
    console.log('click hereee')
    if (show != 'projectContent') {
        let temp = show
        show = 'projectContent'
        document.getElementById('projectContent').classList.remove('noshow')
        document.getElementById('projectContent').classList.add('show')
        document.getElementById(temp).classList.remove('show')
        document.getElementById(temp).classList.add('noshow')
    }
    if(showMenu) dropdownMenu()
}
function showGallery() {
    if (show != 'galleryContent') {
        let temp = show
        show = 'galleryContent'
        document.getElementById('galleryContent').classList.remove('noshow')
        document.getElementById('galleryContent').classList.add('show')
        document.getElementById(temp).classList.remove('show')
        document.getElementById(temp).classList.add('noshow')
    }
    if(showMenu) dropdownMenu()
}
function showContact() {
    if (show != 'contactContent') {
        let temp = show
        show = 'contactContent'
        document.getElementById('contactContent').classList.remove('noshow')
        document.getElementById('contactContent').classList.add('show')
        document.getElementById(temp).classList.remove('show')
        document.getElementById(temp).classList.add('noshow')
    }
    if(showMenu) dropdownMenu()
}
function next() {
    if (bj == 'bj2') {
        bj = 'bj3'
        let image = document.getElementById('bj2Img')
        console.log('aaaa', image.src)
        let temp = image.src
        image.src = "https://cdn.bildhive.com/noinstace/1c71d3a3163547f99eb73f9a04981a36.png"
        let image1 = document.getElementById('bj1Img')
        image1.src = temp
        let image2 = document.getElementById('bj3Img')
        image2.src = "https://cdn.bildhive.com/noinstace/212971a6266044bf8ee7542ad14a234e.png"
    } else if (bj == 'bj3') {
        bj = 'bj1' 
        let image = document.getElementById('bj2Img')
        let temp = image.src
        image.src = "https://cdn.bildhive.com/noinstace/212971a6266044bf8ee7542ad14a234e.png"
        let image1 = document.getElementById('bj1Img')
        image1.src = temp
        let image2 = document.getElementById('bj3Img')
        image2.src = "https://cdn.bildhive.com/noinstace/f1d594be14894d5daeb00bdea8e0bbab.png"
    } else if (bj == 'bj1') {
        bj = 'bj2' 
        let image = document.getElementById('bj2Img')
        let temp = image.src
        image.src = "https://cdn.bildhive.com/noinstace/f1d594be14894d5daeb00bdea8e0bbab.png"
        let image1 = document.getElementById('bj1Img')
        image1.src = temp
        let image2 = document.getElementById('bj3Img')
        image2.src = "https://cdn.bildhive.com/noinstace/1c71d3a3163547f99eb73f9a04981a36.png"
    }

}
function prev() {
    if (bj == 'bj2') {
        bj = 'bj1'
        let image = document.getElementById('bj2Img')
        let temp = image.src
        image.src = "https://cdn.bildhive.com/noinstace/212971a6266044bf8ee7542ad14a234e.png"
        let image2 = document.getElementById('bj3Img')
        image2.src = temp
        let image1 = document.getElementById('bj1Img')
        image1.src = "https://cdn.bildhive.com/noinstace/1c71d3a3163547f99eb73f9a04981a36.png"
    } else if (bj == 'bj1') {
        bj = 'bj3' 
        let image = document.getElementById('bj2Img')
        let temp = image.src
        image.src = "https://cdn.bildhive.com/noinstace/1c71d3a3163547f99eb73f9a04981a36.png"
        let image2 = document.getElementById('bj3Img')
        image2.src = temp
        let image1 = document.getElementById('bj1Img')
        image1.src = "https://cdn.bildhive.com/noinstace/f1d594be14894d5daeb00bdea8e0bbab.png"
    } else if (bj == 'bj3') {
        bj = 'bj2' 
        let image = document.getElementById('bj2Img')
        let temp = image.src
        image.src = "https://cdn.bildhive.com/noinstace/f1d594be14894d5daeb00bdea8e0bbab.png"
        let image2 = document.getElementById('bj3Img')
        image2.src = temp
        let image1 = document.getElementById('bj1Img')
        image1.src = "https://cdn.bildhive.com/noinstace/212971a6266044bf8ee7542ad14a234e.png"
    }
}
function dropdownMenu (){
    if (!showMenu) {
        showMenu = true
        document.getElementById('menuIcon').style.display = null
        document.getElementById('menuIcon').style.opacity = 0
        document.getElementById('closeIcon').style.display = 'block'
        document.getElementById('closeIcon').style.opacity = 1
        document.getElementById('menuOptions').style.height = '100vh'
        // document.getElementById('menuIcon').classList.add('noshow')
        // document.getElementById('closeIcon').classList.remove('noshow')
        // document.getElementById('closeIcon').classList.add('showClose')
    } else {
        showMenu = false
        document.getElementById('closeIcon').style.display = null
        document.getElementById('closeIcon').style.opacity = 0
        document.getElementById('menuIcon').style.display = 'block'
        document.getElementById('menuIcon').style.opacity = 1
        document.getElementById('menuOptions').style.height = '0vh'
    }
}