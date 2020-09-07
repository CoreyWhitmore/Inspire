export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = this.kelvin - 273.15
    this.fahrenheight = (this.celsius * (9 / 5)) + 32
    this.isCelsius = false
  }

  get Template() {
    if (this.isCelsius) {
      return `<p>${this.celsius.toFixed(0).toString()} &#8451</p>`
    } else {
      return `<p>${this.fahrenheight.toFixed(0).toString()} &#8457</p>`
    }
  }
}