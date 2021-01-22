var show = 'aboutContent'
var bj = 'bj2'
document.getElementById("about").addEventListener("click", showAbout); 
document.getElementById("project").addEventListener("click", showProject); 
document.getElementById("gallery").addEventListener("click", showGallery); 
document.getElementById("contact").addEventListener("click", showContact); 
document.getElementById("nextIcon").addEventListener("click", next); 
document.getElementById("prevIcon").addEventListener("click", prev); 
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
}
function showProject() {
    if (show != 'projectContent') {
        let temp = show
        show = 'projectContent'
        document.getElementById('projectContent').classList.remove('noshow')
        document.getElementById('projectContent').classList.add('show')
        document.getElementById(temp).classList.remove('show')
        document.getElementById(temp).classList.add('noshow')
    }
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
}
function next() {
    if (bj == 'bj2') {
        bj = 'bj3'
        let image = document.getElementById('bj2Img')
        let temp = image.src
        image.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack1.png"
        let image1 = document.getElementById('bj1Img')
        image1.src = temp
        let image2 = document.getElementById('bj3Img')
        image2.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack2.png"
    } else if (bj == 'bj3') {
        bj = 'bj1' 
        let image = document.getElementById('bj2Img')
        let temp = image.src
        image.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack2.png"
        let image1 = document.getElementById('bj1Img')
        image1.src = temp
        let image2 = document.getElementById('bj3Img')
        image2.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack.png"
    } else if (bj == 'bj1') {
        bj = 'bj2' 
        let image = document.getElementById('bj2Img')
        let temp = image.src
        image.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack.png"
        let image1 = document.getElementById('bj1Img')
        image1.src = temp
        let image2 = document.getElementById('bj3Img')
        image2.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack1.png"
    }

}
function prev() {
    if (bj == 'bj2') {
        bj = 'bj1'
        let image = document.getElementById('bj2Img')
        let temp = image.src
        image.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack2.png"
        let image2 = document.getElementById('bj3Img')
        image2.src = temp
        let image1 = document.getElementById('bj1Img')
        image1.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack1.png"
    } else if (bj == 'bj1') {
        bj = 'bj3' 
        let image = document.getElementById('bj2Img')
        let temp = image.src
        image.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack1.png"
        let image2 = document.getElementById('bj3Img')
        image2.src = temp
        let image1 = document.getElementById('bj1Img')
        image1.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack.png"
    } else if (bj == 'bj3') {
        bj = 'bj2' 
        let image = document.getElementById('bj2Img')
        let temp = image.src
        image.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack.png"
        let image2 = document.getElementById('bj3Img')
        image2.src = temp
        let image1 = document.getElementById('bj1Img')
        image1.src = "file:///Users/thucnguyen/dorothy_website/assets/blackjack2.png"
    }
}