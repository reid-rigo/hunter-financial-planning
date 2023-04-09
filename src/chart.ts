import Chart from "chart.js/auto"
import type { LifeResult } from "./calculator"

function chartLifePlan(canvas: HTMLCanvasElement, lifeResult: LifeResult): Chart {
  return new Chart(canvas, {
    type: "line",
    data: {
      labels: lifeResult.yearResults.map(yearResult => yearResult.year),
      datasets: [{
        label: "$",
        data: lifeResult.yearResults.map(yearResult => yearResult.finalAmount)
      }]
    }
  })
}

export { chartLifePlan }