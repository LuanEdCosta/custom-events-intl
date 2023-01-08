import { CUSTOM_EVENTS } from "./events";

// -----------------------------------------------------------------------------

const timestampButton = document.getElementById("timestamp-button")!;
const dateButton = document.getElementById("date-button")!;
const customButton = document.getElementById("custom-button")!;
const notifyButton = document.getElementById("notify-button")!;

const timestampValue = document.getElementById("timestamp-value")!;
const dateValue = document.getElementById("date-value")!;
const customValue = document.getElementById("custom-value")!;

// -----------------------------------------------------------------------------

timestampButton.addEventListener("click", (e) => {
  const event = new Event(CUSTOM_EVENTS.TIMESTAMP, {
    bubbles: true,
    cancelable: true,
    composed: true,
  });

  e.target?.dispatchEvent(event);
});

dateButton.addEventListener("click", function () {
  const event = new Event(CUSTOM_EVENTS.DATE, {
    bubbles: true,
    cancelable: true,
    composed: true,
  });

  this.dispatchEvent(event);
});

customButton.addEventListener("click", () => {
  const event = new CustomEvent(CUSTOM_EVENTS.CUSTOM, {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail: "Today is a good day!",
  });

  customButton.dispatchEvent(event);
});

notifyButton.addEventListener("click", () => {
  const intl = new Intl.DateTimeFormat(navigator.language, {
    dateStyle: "full",
  });

  const now = intl.format(new Date());

  const event = new CustomEvent(CUSTOM_EVENTS.NOTIFY, {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail: `Notifying You At: ${now}`,
  });

  document.dispatchEvent(event);
});

// -----------------------------------------------------------------------------

document.addEventListener(CUSTOM_EVENTS.TIMESTAMP, () => {
  const intl = new Intl.DateTimeFormat(navigator.language, {
    timeStyle: "full",
    dateStyle: "full",
  });

  timestampValue.innerText = intl.format(new Date());
});

document.addEventListener(CUSTOM_EVENTS.DATE, () => {
  const intl = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" });
  dateValue.innerText = intl.format(Date.now());
});

document.addEventListener(CUSTOM_EVENTS.CUSTOM, (e) => {
  const event = e as CustomEvent;
  customValue.innerText = event.detail;
});

window.addEventListener(CUSTOM_EVENTS.NOTIFY, (e) => {
  const event = e as CustomEvent;
  alert(event.detail);
});

// -----------------------------------------------------------------------------

const list = ["Hello", "World", "This", "Is", "Me"];

console.log(new Intl.ListFormat().format(list));
console.log(new Intl.ListFormat("en-US").format(list));
console.log(new Intl.ListFormat("en-US", { style: "short" }).format(list));
console.log(new Intl.ListFormat("en-US", { style: "narrow" }).format(list));
console.log(new Intl.ListFormat("en-US", { type: "disjunction" }).format(list));
console.log(new Intl.ListFormat("en-US", { type: "conjunction" }).format(list));
console.log(new Intl.ListFormat("en-US", { type: "unit" }).format(list));

// -----------------------------------------------------------------------------

console.log(new Intl.NumberFormat().format(123456789));
console.log(new Intl.NumberFormat("en-US").format(123456789));
console.log(new Intl.NumberFormat().formatRange(123, 456));
console.log(new Intl.NumberFormat("en-US").formatRange(123, 456));
