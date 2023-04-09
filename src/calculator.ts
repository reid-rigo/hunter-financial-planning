import { times } from "lodash-es"

type YearPlan = {
  monthlyContribution: number,
  growthRate: number,
  year: number
}

type CalculatedYearPlan = YearPlan & {
  initialAmount: number,
  finalAmount: number
}

type LifePlan = {
  initialAmount: number,
  monthlyContribution: number,
  growthRate: number,
  startYear: number,
  years: number,
}

type CalculatedLifePlan = LifePlan & {
  finalAmount: number,
  calculatedYearPlans: CalculatedYearPlan[]
}

function calculateLifePlan(lifePlan: LifePlan): CalculatedLifePlan {
  const { initialAmount, monthlyContribution, growthRate, startYear, years } = lifePlan
  const yearPlans = times(years + 1, y => {
    return { monthlyContribution, growthRate, year: startYear + y }
  })

  let amount = initialAmount
  const calculatedYearPlans = yearPlans.map(yearPlan => {
    const { monthlyContribution, growthRate } = yearPlan
    const initialAmount = amount
    const finalAmount = (amount * (1.0 + growthRate/100.0)) + (monthlyContribution * 12)
    amount = finalAmount

    return {
      ...yearPlan,
      initialAmount,
      finalAmount
    }
  })

  return {
    ...lifePlan,
    calculatedYearPlans,
    finalAmount: amount
  }
}

export { calculateLifePlan }
export type { LifePlan, CalculatedLifePlan }