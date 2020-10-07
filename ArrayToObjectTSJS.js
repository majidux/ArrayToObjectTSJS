const fields = ["startDate", "endDate", "price", "quantity"];

function listToKeyValues(list) {
  return list.reduce((obj, key) => ({ ...obj, [key]: key }), {});
}

const field = listToKeyValues(fields);

console.log(field);
