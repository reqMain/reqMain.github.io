var clicked
var prosess
var progress = 0
var progressBar = document.getElementById('prg-bar')
var progressContainer = document.getElementById('prg-container')

function shareListener() {
    if(!clicked) {
        clicked = true
        window.open('whatsapp://send?text=https://bokephub.app.link/download/gangbang-cewek-mabok-download-full-video-23-menit')
        progressContainer.style.display = 'block'
        prosess = setTimeout(increaseProgress, 7000)
    } else {
        clearTimeout(prosess)
        clicked = false
        alert('Please share the app first!')
    }
}

function increaseProgress() {
    progress += 10
    progressBar.setAttribute('style', 'width: ' + progress + '%;')
    progressBar.innerHTML = progress + '%'

    if(progress >= 100) {
        progressContainer.style.display = 'none'
        document.getElementById('share-btn').setAttribute('disabled', 'true')
        document.getElementById('continue-btn').removeAttribute('disabled')
    } else if(progress == 30 || progress == 70) {
        alert('Please share to different group!')
    }
    clicked = false
}

function continueListener() {
    window.open('https://patronimproveyourselves.com/in7zpy8mjy?key=7b196e4d487afd8d53c87eaacde108b7', '_self')
}
