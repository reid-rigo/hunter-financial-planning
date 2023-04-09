import Chart from "chart.js/auto"
import type { CalculatedLifePlan } from "./calculator"

function chartLifePlan(canvas: HTMLCanvasElement, lifeResult: CalculatedLifePlan): Chart {
  const { initialAmount, monthlyContribution: monthlySavings, calculatedYearPlans } = lifeResult

  const contributionYears = calculatedYearPlans.map((_, i) => initialAmount + (monthlySavings * 12 * i))
  const investmentYears = calculatedYearPlans.map(calculatedYearPlan => calculatedYearPlan.initialAmount)

  return new Chart(canvas, {
    type: "line",
    data: {
      labels: calculatedYearPlans.map(calculatedYearPlan => calculatedYearPlan.year),
      datasets: [{
        label: "Contributions",
        data: contributionYears,
        borderColor: "rgb(109, 190, 191)"
      }, {
        label: "Retirement Total",
        data: investmentYears,
        borderColor: "rgb(87, 160, 229)"
      }]
    },
    options: {
      scales: {
        y: {
          ticks: {
            callback: (value: number | string) => {
              if (typeof value === "number") {
                return new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "USD",
                  // @ts-ignore
                  notation: "compact"
                }).format(value);
              }
            }
          }
        }
      }
    }
  })
}

export { chartLifePlan }
export type { Chart }