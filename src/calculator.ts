import { times } from "lodash-es"

type YearPlan = {
  monthlySavings: number,
  interestRate: number,
  year: number
}

type YearResult = YearPlan & {
  initialAmount: number,
  finalAmount: number
}

type LifePlan = {
  initialAmount: number,
  monthlySavings: number,
  interestRate: number,
  years: number,
}

type LifeResult = LifePlan & {
  finalAmount: number,
  yearResults: YearResult[]
}

function createLifePlan(lifePlan: LifePlan): LifeResult {
  const { initialAmount, monthlySavings, interestRate, years } = lifePlan
  const startYear = new Date().getFullYear() + 1 // next year
  const yearPlans = times(years, (y) => {
    return { monthlySavings, interestRate, year: startYear + y }
  })

  let amount = initialAmount
  const yearResults = yearPlans.map(yearPlan => {
    const { monthlySavings, interestRate } = yearPlan
    const initialAmount = amount
    const finalAmount = (amount * (1.0 + interestRate/100.0)) + (monthlySavings * 12)
    amount = finalAmount

    return {
      ...yearPlan,
      initialAmount,
      finalAmount
    }
  })

  return {
    ...lifePlan,
    yearResults,
    finalAmount: amount
  }
}

export { createLifePlan }
export type { LifeResult }