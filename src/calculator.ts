type YearPlan = {
  monthlySavings: number,
  interestRate: number
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

function lifePlan(lifePlan: LifePlan): LifeResult {
  const { initialAmount, monthlySavings, interestRate, years } = lifePlan
  const yearPlans = Array<YearPlan>(years).fill({ monthlySavings, interestRate })

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

export { lifePlan }