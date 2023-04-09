import Chart from "chart.js/auto"
import type { LifeResult } from "./calculator"

function chartLifePlan(canvas: HTMLCanvasElement, lifeResult: LifeResult): Chart {
  const { initialAmount, monthlySavings, yearResults } = lifeResult

  const contributionYears = yearResults.map((yearResult, i) => initialAmount + (monthlySavings * 12 * i))
  const investmentYears = yearResults.map(yearResult => yearResult.initialAmount)

  return new Chart(canvas, {
    type: "line",
    data: {
      labels: yearResults.map(yearResult => yearResult.year),
      datasets: [{
        label: "Retirement Total",
        data: investmentYears,
        borderColor: "#57a0e5"
      }, {
        label: "Contributions",
        data: contributionYears,
        borderColor: "#6dbebf"
      }]
    }
  })
}

export { chartLifePlan }