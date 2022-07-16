const themeToggler = document.getElementById("theme-toggle")
const themeToggleText = document.getElementById("theme-toggle-text")
const logoImage = document.getElementById("logo-img")
const cardPreview = document.getElementById("card-preview")
const cardNumberInput = document.getElementById("card-number")
const CARD_NUMBER_LENGTH = 16
const cardIssuer = document.getElementById("issuer")
const cardBrand = document.getElementById("brand")
const issuerDataDIV = document.getElementById("issuer-data")
const toggleBg = document.getElementById("toggle-bg")
let issuerData

themeToggler.addEventListener("click", () => {
  let themeState = JSON.parse(themeToggler.dataset.state)
  themeToggler.dataset.state = !themeState
  if (themeState) {
    themeToggler.classList.remove("bi-lightbulb-fill")
    themeToggler.classList.add("bi-lightbulb")
    document.body.classList.remove("dark-mode")
    document.body.classList.add("light-mode")
    themeToggleText.textContent = "Darkness, Come Forth!"
    logoImage.src = "./assets/img/logo_black.svg"
  } else {
    themeToggler.classList.add("bi-lightbulb-fill")
    themeToggler.classList.remove("bi-lightbulb")
    document.body.classList.add("dark-mode")
    document.body.classList.remove("light-mode")
    themeToggleText.textContent = "Let There Be Light"
    logoImage.src = "./assets/img/logo_white.svg"
  }
})

document.body.addEventListener("click", () => { })


document.getElementById("logo-container").addEventListener("click", () => {
  window.open("https://damilareidowu.com", "_blank");
})

const cardNumberField = document.getElementById("card-number-input")
cardNumberInput.addEventListener("input", (e) => {
  let parsedInput = e.target.value.split("").filter(char => !isNaN(char)).join("")
  cardNumberField.innerHTML = `${formatCardNumber(`${parsedInput}${"*".repeat(CARD_NUMBER_LENGTH - parsedInput.length)}`)}`
  parsedInput = parsedInput.length > 6 ? parsedInput.substring(0, 6) : parsedInput
  cardNumberInput.value = parsedInput
  parsedInput.length === 6 ? getIssuerData(parsedInput) : getIssuerData(100000)

})

cardPreview.addEventListener("click", () => {
  const bgImg = cardPreview.currentStyle || window.getComputedStyle(cardPreview, false)
  const fileName = bgImg.backgroundImage.split("/").pop().replace(/"\)/, "")

  if (fileName !== `bg.png`) {
    cardPreview.style.backgroundImage = `url("./assets/img/bgs/bg.png")`
  } else {
    if (issuerData && issuerData.issuer) {
      cardPreview.style.backgroundImage = `url("./assets/img/bgs/${issuerData.issuer}.png")`
    }
  }
})

function formatCardNumber(cardNum) {
  cardNum = String(cardNum)
  let output = ""
  for (let i = 0; i < cardNum.length; i++) {
    output += i % 4 === 0 && i > 0 ? ` ${cardNum[i]}` : cardNum[i]
  }
  return output
}


function getIssuerData(bin) {
  issuerData = new Issuer(Number(bin)).getIssuerData()

  if (issuerData.issuer) {
    cardIssuer.innerHTML = `<img class="img-fluid img-filter" src="./assets/img/logos/${issuerData.issuer}.png"/>`
    cardBrand.innerHTML = `<img class="img-fluid img-filter" src="./assets/img/${issuerData.brand.toLowerCase()}.png"/>`
    cardPreview.style.backgroundImage = `url("./assets/img/bgs/${issuerData.issuer}.png")`
    toggleBg.classList.remove("d-none")
    toggleBg.classList.add("d-flex")
    issuerDataDIV.innerHTML = `<div
    class="mt-3 col-lg-5 d-flex border border-2 p-2 rounded justify-content-evenly align-items-center zoomIn"
    role="button"
  >
    <div class="col p-3 d-flex justify-content-center">
      <span class="issuer-data">${issuerData.issuer}</span>
    </div>

    <div class="col p-3 d-flex justify-content-center">
      <span class="issuer-data">${issuerData.brand} ${issuerData.type} ${issuerData.level}</span>
    </div>
  </div>`
  } else {
    cardPreview.style.backgroundImage = `url("./assets/img/bgs/bg.png")`
    cardIssuer.innerHTML = ``
    cardBrand.innerHTML = ``
    toggleBg.classList.add("d-none")
    toggleBg.classList.remove("d-flex")
    bin.length === 6 ? issuerDataDIV.innerHTML = `<span class="text-danger d-flex justify-content-center">No Data Found.</span>` : issuerDataDIV.innerHTML = ``
  }
}




