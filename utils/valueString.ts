export default function valueString(valueString: string) {
  const numeral = valueString.substring(0, valueString.length - 2);
  const decimals = valueString.substring(
    valueString.length - 2,
    valueString.length
  );

  valueString = numeral + "." + decimals;

  const number = Number.parseFloat(valueString);

  return number;
}
