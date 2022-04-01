# Objects:
Unordered key-value pairs

## good when:
- you don't need order
- fast access, insertion and removal

O(1):
- add
- delete
- get
- hasOwnProperty

O(N)
- searching
- Object.keys
- Object.values
- Object.entries


# Arrays
Ordered lists

## good when:
- you need order
- fast access, insertion and removal (sort of...)
e.g:
- add item at the end of Array - push() - O(1)
- at the beginning - unshift() - O(N)
the same for removing:
- pop() and shift()
