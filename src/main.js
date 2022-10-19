import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "2D57F2"],
    mastercard: ["#C69347", "#DF6F29"],
    default: ["black", "gray"],
  }
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}
setCardType("mastercard")

//Mask Card
//Card Number
const ccNumber = document.getElementById("card-number")

//Security code
const SecurityCode = document.getElementById("security-code")
const securityCodePatten = {
  mask: "0000",
}
const securityCodeMasked = IMask(SecurityCode, securityCodePatten)
securityCodeMasked.updateOptions({
  mask: Number,
  minLength: 1,
  maxLength: 4,
})

//Date Exp
const expirationDate = document.getElementById("expiration-date")
const expirationDatePatten = {
  mask: "MM{/}YY",

  blocks: {
    YY: {
      mask: "00",
    },

    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
  },
}

const expirationDateMasked = IMask(expirationDate, expirationDatePatten)

globalThis.setCardType = setCardType
