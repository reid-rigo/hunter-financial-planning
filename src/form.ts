import { LifePlan } from "./calculator"

function onLifePlanSubmit(form: HTMLFormElement, callback: (lifePlan: LifePlan) => void): void {
  form?.addEventListener("submit", event => {
    event.preventDefault()

    const initialAmount = inputToNumber(form, "initialAmount")
    const monthlyContribution = inputToNumber(form, "monthlyContribution")
    const years = inputToNumber(form, "years")
    const growthRate = inputToNumber(form, "growthRate")

    if (initialAmount && monthlyContribution && years && growthRate) {
      const lifePlan = {
        initialAmount, monthlyContribution, years, growthRate,
        startYear: nextYear()
      }
      console.log(lifePlan)
      callback(lifePlan)
    }
  })
}

function nextYear(): number {
  return new Date().getFullYear() + 1
}

function inputToNumber(form: HTMLFormElement, inputName: string): number | null {
  const input = form.querySelector<HTMLInputElement>(`input[name="${inputName}"]`)
  const value = input?.value
  return value ? parseInt(value) : null
}

export { onLifePlanSubmit }