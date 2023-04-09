import { calculateLifePlan } from "./calculator"
import { chartLifePlan, Chart } from "./chart"
import { onLifePlanUpdate, formatCurrencyInput, formatPercentageInput } from "./form"

function findForm(): HTMLFormElement | null {
  return document.querySelector<HTMLInputElement>("#initial-investment")?.form || null
}

function setup(): void {
  const form = findForm()
  const canvas = <HTMLCanvasElement>document.querySelector("canvas#chart")
  let currentChart: Chart

  if (form) {
    form.querySelectorAll<HTMLInputElement>(".currency-input").forEach(input => formatCurrencyInput(input))
    form.querySelectorAll<HTMLInputElement>("percentage.input").forEach(input => formatPercentageInput(input))

    onLifePlanUpdate(form, lifePlan => {
      const calculatedLifePlan = calculateLifePlan(lifePlan)
      currentChart?.destroy()
      currentChart = chartLifePlan(canvas, calculatedLifePlan)
    })

    console.log("Set up calculator", form)
  }
}

if (findForm()) {
  setup()
}