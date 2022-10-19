import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")
const ccNumber = document.querySelector("#card-number")
const ccSecurityCode = document.querySelector("#security-code")

console.log(ccSecurityCode)

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

function Mask() {
  const maskOptions = {
    ccSecurityCode: "0000",
    ccNumber: "000000000000",
  }
  const mask = IMask(ccSecurityCode, maskOptions)
}

globalThis.setCardType = setCardType
