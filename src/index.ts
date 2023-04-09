import { createLifePlan } from "./calculator"
import { chartLifePlan } from "./chart"

export { createLifePlan, chartLifePlan }

const lifePlan = createLifePlan({
  initialAmount: 20000,
  monthlySavings: 2000,
  interestRate: 6.0,
  years: 20
})

const canvas = <HTMLCanvasElement>document.querySelector("canvas#chart")
chartLifePlan(canvas, lifePlan)