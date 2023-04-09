import { calculateLifePlan } from "./calculator"
import { chartLifePlan, Chart } from "./chart"
import { onLifePlanSubmit } from "./form"

const form = <HTMLFormElement>document.querySelector("form")
const canvas = <HTMLCanvasElement>document.querySelector("canvas#chart")
let currentChart: Chart

onLifePlanSubmit(form, lifePlan => {
  const calculatedLifePlan = calculateLifePlan(lifePlan)
  currentChart?.destroy()
  currentChart = chartLifePlan(canvas, calculatedLifePlan)
})