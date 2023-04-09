import { createLifePlan } from "./calculator"
import { chartLifePlan } from "./chart"

export { createLifePlan, chartLifePlan }

const lifePlan = createLifePlan({
  initialAmount: 20000,
  monthlyContribution: 2000,
  interestRate: 6.0,
  startYear: 2024,
  years: 20
})

const canvas = <HTMLCanvasElement>document.querySelector("canvas#chart")
chartLifePlan(canvas, lifePlan)