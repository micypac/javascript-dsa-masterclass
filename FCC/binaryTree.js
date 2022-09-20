class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

/*
        a
      /   \
     b     c
    / \.    \
   d.  e.    f
*/

// Depth first search iterative.
const depthFirstSearchI = (root) => {
  if (root === null) return []

  const result = []
  const stack = [root]

  while (stack.length > 0) {
    const current = stack.pop()
    result.push(current.val)

    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }

  return result
}

// Depth first search recursive.
const depthFirstSearchR = (root) => {
  if (root === null) return []
  const left = depthFirstSearchR(root.left)
  const right = depthFirstSearchR(root.right)
  return [root.val, ...left, ...right]
}

// Breadth first search.
const breadthFirstSearchI = (root) => {
  if (root === null) return []

  const result = []
  const queue = [root]

  while (queue.length > 0) {
    const current = queue.shift()
    result.push(current.val)

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return result
}

// Find if specific value exist somewhere in the tree. Using BFS.
const treeIncludesI = (root, target) => {
  if (root === null) return false

  const queue = [root]
  while (queue.length > 0) {
    const current = queue.shift()
    if (current.val === target) return true

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return false
}

// Find if specific value exist somewhere in the tree. Using recursive.
const treeIncludesR = (root, target) => {
  if (root === null) return false
  if (root.val === target) return true

  return treeIncludesR(root.left, target) || treeIncludesR(root.right, target)
}

console.log(depthFirstSearchI(a))
console.log(depthFirstSearchR(a))
console.log(breadthFirstSearchI(a))
console.log(treeIncludesI(a, 'e'))
console.log(treeIncludesI(a, 'm'))
console.log(treeIncludesR(a, 'e'))
