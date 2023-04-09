import Chart from "chart.js/auto"
import type { LifeResult } from "./calculator"

function chartLifePlan(canvas: HTMLCanvasElement, lifeResult: LifeResult): Chart {
  const { initialAmount, monthlyContribution: monthlySavings, yearResults } = lifeResult

  const contributionYears = yearResults.map((yearResult, i) => initialAmount + (monthlySavings * 12 * i))
  const investmentYears = yearResults.map(yearResult => yearResult.initialAmount)

  return new Chart(canvas, {
    type: "line",
    data: {
      labels: yearResults.map(yearResult => yearResult.year),
      datasets: [{
        label: "Contributions",
        data: contributionYears,
        borderColor: "#6dbebf"
      }, {
        label: "Retirement Total",
        data: investmentYears,
        borderColor: "#57a0e5"
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