function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high]

  // Minus one because we do both low and high as inclusives ('<= pivot')
  let idx = low - 1

  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      idx++
      const tmp = arr[i]
      arr[i] = arr[idx]
      arr[idx] = tmp
    }
  }
   
  // Now replace the pivot
  idx++
  arr[high] = arr[idx]
  arr[idx] = pivot

  // Could also do this, but since we have the pivot it is not needed - But it may be easier to understand
  // const tmp = arr[high]
  // arr[high] = arr[idx]
  // arr[idx] = tmp

  return idx
}

function qs(arr: number[], low: number, high: number): void {
  // Base case or Stopping condition
  if (low >= high) {
    return
  }

  const pivotIndex = partition(arr, low, high)

  // Recurse 
  // Qicksort next two branches, but exclude the last pivot value by -> 'pivotIndex - 1' or 'pivotIndex + 1'
  qs(arr, low, pivotIndex - 1)
  qs(arr, pivotIndex + 1, high)
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1)
}