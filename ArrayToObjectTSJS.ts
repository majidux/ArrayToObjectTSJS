const fields = ["startDate", "endDate", "price", "quantity"] as const;

type Field = typeof fields[number];

function listToKeyValues<T extends string>(
  list: readonly T[]
): { [key: string]: T } {
  return list.reduce(
    (obj: { [key: string]: T }, key: T) => ({ ...obj, [key]: key }),
    {}
  );
}

const field = listToKeyValues<Field>(fields);

console.log(field);
