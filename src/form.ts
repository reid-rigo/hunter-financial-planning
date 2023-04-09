import { LifePlan } from "./calculator"

function onLifePlanSubmit(form: HTMLFormElement, callback: (lifePlan: LifePlan) => void): void {
  form?.addEventListener("submit", event => {
    event.preventDefault()

    const initialAmount = numberFromInputName(form, "initialAmount")
    const monthlyContribution = numberFromInputName(form, "monthlyContribution")
    const years = numberFromInputName(form, "years")
    const growthRate = numberFromInputName(form, "growthRate")

    console.log(initialAmount, monthlyContribution, years, growthRate)

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

function numberFromInputName(form: HTMLFormElement, inputName: string): number | null {
  const input = form.querySelector<HTMLInputElement>(`input[name="${inputName}"]`)
  return input ? numberFromInput(input) : null
}

function numberFromInput(input: HTMLInputElement): number | null {
  return Number(input.value.replace(/[^0-9.,-]+/g,""))
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

export { onLifePlanSubmit, formatCurrencyInput, formatPercentageInput }