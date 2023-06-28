export const arrchunk = <T>(listraw: T[], size: number): T[][] => {
  const list = [...listraw]
  return [...Array(Math.ceil(list.length / size))].map(() => list.splice(0, size))
}
