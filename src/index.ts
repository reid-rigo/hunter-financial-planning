import { calculateLifePlan } from "./calculator"
import { chartLifePlan, Chart } from "./chart"
import { onLifePlanSubmit, formatCurrencyInput, formatPercentageInput } from "./form"

const form = document.querySelector<HTMLFormElement>("form")
const canvas = <HTMLCanvasElement>document.querySelector("canvas#chart")
let currentChart: Chart

if (form) {
  form.querySelectorAll<HTMLInputElement>("input[data-currency]").forEach(input => formatCurrencyInput(input))
  form.querySelectorAll<HTMLInputElement>("input[data-percentage]").forEach(input => formatPercentageInput(input))

  onLifePlanSubmit(form, lifePlan => {
    const calculatedLifePlan = calculateLifePlan(lifePlan)
    currentChart?.destroy()
    currentChart = chartLifePlan(canvas, calculatedLifePlan)
})}
