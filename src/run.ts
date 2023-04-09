import { createLifePlan } from "./calculator"

const lifePlan = createLifePlan({
  initialAmount: 20000,
  monthlySavings: 2000,
  interestRate: 6.0,
  years: 20
})

console.log(lifePlan)