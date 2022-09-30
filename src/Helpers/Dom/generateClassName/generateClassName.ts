export default function generateClassName(
  classNames: (string | undefined | null | boolean | number)[] = [],
): string {
  return classNames.filter((item) => !!item).join(' ');
}
