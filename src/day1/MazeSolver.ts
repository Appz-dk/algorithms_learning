const directions = [
  [0, 1], // up
  [1, 0], // right
  [0, -1], // down
  [-1, 0], // left
]

const walk = (maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean => {
  // 1. Base case
  // Walking off the map
  if(curr.x < 0 || curr.x >= maze[0].length ||
    curr.y < 0 || curr.y >= maze.length ) {
    return false
  }
  // Walking into a wall
  if (maze[curr.y][curr.x] === wall) {
    return false
  }
  // Walking to the end point
  if (end.x === curr.x && end.y === curr.y) {
    path.push(end)
    return true
  }
  // Walking to already seen point
  if (seen[curr.y][curr.x]) {
    return false
  }

  // 2. Recursion
  // Pre
  seen[curr.y][curr.x] = true
  path.push(curr)

  // Recurse (in each dirrection left,right,up,down)
  for (let i = 0; i < directions.length; i++) {
    const [x, y] = directions[i]
    const newCurr = {
      x: curr.x + x,
      y: curr.y + y
    }

    if (walk(maze, wall, newCurr, end, seen, path)) {
      return true
    }
  }

  // Post 
  path.pop()

  return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = []
  const path: Point[] = []

  // Fill the seen array with all false values
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false))
  }

  walk(maze, wall, start, end, seen, path)

  return path
}
