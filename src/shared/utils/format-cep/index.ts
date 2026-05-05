export function formatCep(value = "") {
  let formattedCep = value.replace(/[^0-9&-]/g, "");

  if (value.length === 5) {
    formattedCep = value + "-";
  }
  if (value.slice(5) === "-") {
    formattedCep = value.replace("-", "");
  }

  return formattedCep;
}

export function sanitizeCep(cep = "") {
  return cep.replace("-", "");
}
