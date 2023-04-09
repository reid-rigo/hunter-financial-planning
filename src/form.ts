import { LifePlan } from "./calculator"

function onLifePlanUpdate(form: HTMLFormElement, callback: (lifePlan: LifePlan) => void): void {
  const checkLifePlan = () => {
    const initialAmount = numberFromInputSelector(form, "#initial-investment")
    const monthlyContribution = numberFromInputSelector(form, "#monthly-contribution")
    const years = numberFromInputSelector(form, "#years")
    const growthRate = numberFromInputSelector(form, "#growth-rate")

    console.log(initialAmount, monthlyContribution, years, growthRate)

    if (initialAmount && monthlyContribution && years && growthRate) {
      const lifePlan = {
        initialAmount, monthlyContribution, years, growthRate,
        startYear: nextYear()
      }
      callback(lifePlan)
    }
  }
  form.querySelectorAll<HTMLInputElement>("input").forEach(input => {
    input.addEventListener("blur", checkLifePlan)
  })
  checkLifePlan()
}

function nextYear(): number {
  return new Date().getFullYear() + 1
}

function numberFromInputSelector(form: HTMLFormElement, selector: string): number | null {
  const input = form.querySelector<HTMLInputElement>(selector)
  return input ? numberFromInput(input) : null
}

function numberFromInput(input: HTMLInputElement): number | null {
  return Number(input.value.replace(/[^0-9.-]+/g,""))
}

function formatCurrencyInput(input: HTMLInputElement): void {
  const focus = () => {
    const number = numberFromInput(input)
    if (number && number > 0) {
      input.value = number.toString()
    }
  }

  const blur = () => {
    const number = numberFromInput(input)
    if (number) {
      input.value = new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(number)
    }
  }

  input.addEventListener("focus", focus)
  input.addEventListener("blur", blur)

  blur()
}

function formatPercentageInput(input: HTMLInputElement): void {
  const focus = () => {
    const number = numberFromInput(input)
    if (number && number > 0) {
      input.value = number.toString()
    }
  }

  const blur = () => {
    const number = numberFromInput(input)
    if (number) {
      input.value = `${number}%`
    }
  }

  input.addEventListener("focus", focus)
  input.addEventListener("blur", blur)

  blur()
}

export { onLifePlanUpdate, formatCurrencyInput, formatPercentageInput }