import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['renderElement']
  static values = { data: Object }

  connect() {
    console.log(this.dataValue)
    this.elementToRender()
  }

  elementToRender() {
    const dataOne = this.dataValue['dataKey']
    const dataTwo = this.dataValue['dataKey2']
    const dataThree = this.dataValue['dataKey3']
  }
}
