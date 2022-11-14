export function triangleArea(side1, side2, side3) {
  const perimeter = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(
    perimeter *
      ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
  );
  return area;
}
