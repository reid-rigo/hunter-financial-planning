import { lifePlan } from "./calculator"

console.log(lifePlan({
  initialAmount: 20000,
  monthlySavings: 2000,
  interestRate: 6.0,
  years: 20
}))