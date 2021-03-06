const tText = document.getElementById('tText')
const tColor = document.getElementById('tColor')
const msg = document.getElementById('msg')
const mColor = document.getElementById('mColor')

const titleDisplay = document.getElementById('titleDisplay')
const msgDisplay = document.getElementById('msgDisplay')


// Title Event Handler
tText.addEventListener('change', function() {
    titleDisplay.innerHTML = tText.value
})

// Title Color Event Handler
tColor.addEventListener('change', function() {
    titleDisplay.style.color = tColor.value
})

// Message Event Handler
msg.addEventListener('change', function() {
    msgDisplay.innerHTML = msg.value
})

// Message Color Handler
mColor.addEventListener('change', function() {
    msgDisplay.style.color = mColor.value
})