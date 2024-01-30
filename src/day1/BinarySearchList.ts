export default function bs_list(haystack: number[], needle: number): boolean {
  // Can only use binary search if the array to be searched is already sorted
  // binary search can lead to off by one issues.
  let startIndex = 0
  let endIndex = haystack.length
  
  while (startIndex < endIndex) {
    let middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2)
    let currentValue = haystack[middleIndex]

    if (currentValue === needle) {
      startIndex = endIndex
      return true
    } else if (currentValue > needle) {
      endIndex = middleIndex
    } else {
      startIndex = middleIndex + 1 // + 1 to take care of the "off by one issue"
    }
  }

  return false
}