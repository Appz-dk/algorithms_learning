// O(N) solution

// export default function two_crystal_balls(breaks: boolean[]): number {
//   // we only have two crystals balls and have to find excatly at what point the crystal ball breaks.
//   // image having a 100 story building and we can toss out the crystal ball from a window until it breaks and that would be the answer
//   // but since we only have two crystals balls we cannot simply use linear search as we could have to use up to 100 crystal balls in that case.
//   // so instead we can use a combination of binary search and linear search.

//   let start = 0
//   let end = breaks.length

//   while (start < end) {
//     let m = Math.floor(start + (end - start) / 2)
//     let v = breaks[m]

//     if (v === true) {
//       // The crystal ball broke now we have to find out excatly at the lowest possible floor it will break
//       // For this we can use linear search
//       for (let i = start; i < end; i++) {
//         if (breaks[i] === true) {
//           return i
//         }
//       } 
//     } else {
//       // because the ball did not break we can exclude all "floors" lower than the middle floor
//       start = m + 1
//     } 

//   }

//   return -1
// }

// O(sqroot(n)) solution
export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpSize = Math.floor(Math.sqrt(breaks.length))
  
  // We jump by the sqroot of the lenth each time until we find the first breaking crystal ball
  let i = jumpSize
  for (; i < breaks.length; i += jumpSize) {
    if (breaks[i]) {
      // stop the loop if 'a crystal ball breaks' aka breaks[i] === true
      break
    }
  }

  // Now we have to jump back by one jump size and search for the first possible break
  i -= jumpSize

  // We search the previous jump size until we find the first breaking point.
  for (let j = 0; j <= jumpSize && i < breaks.length; i++, j++) {
    if (breaks[i]) {
      return i
    }
  }

  return -1
}