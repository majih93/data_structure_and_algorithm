// learn and implement a binary_search_tree

// What is a binary search tree

// a tree structure that has at the most two children

// 왼쪽 자식 노드의 값은 부모 노드보다 작아야 함
// 오른쪽 부모 노드의 값은 부모 노드보다 커야 함

// 트리 관련 조작

// insertion - 트리에 새로운 노드 추가
// search - 주어진 값을 가지고 있는 노드 탐색
// DFS & BFS - 트리의 모든 노드 방문
// deletion - remove a node given its value

// implementation
class Node {
  constructor(value) {
    this.value = value;
    // 자식 노드를 저장하기 위해서 두개의 포인터(?) 변수 null로 초기화
    this.left = null;
    this.right = null;
  }
}

// define tree class itself
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // root가 null인 인스턴스인지 확인 -> root가 null이면 빈트리라고 볼 수 있음
  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);

    // 노드 추가 시에 root node가 null이라면 root에 생성된 노드 할당
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      // 이미 기존 노드들이 존재하는 상태에서, 해당 노드가 어디에 추가될지를 판단해서 추가해야함
      // 위치 판단 아이디어
      // root부터, 해당 value와 대소비교
      // -> 작으면 해당 노드의 left child node와 비교를 반복, 없으면 할당
      // -> 크면 해당 노드의 right child node와 비교를 반복, 없으면 할당
      // 각 노드를 재귀적으로 탐색해서 전달된 value가 추가될 자리를 찾는다.
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    // 재귀적으로 처리되는 구조여야 한다.
    // 아니면 다시 insertNode 처리
    // 종료 조건
    // newNode와 root의 대소비교,
    // newNode가 더 작고 왼쪽노드가 비어있거나,
    // newNode가 더 크고 오른쪽 노드가 비어있거나.
    if (root.value > newNode.value) {
      // 부모노드보다 작은 값인 경우 -> 좌측 자식 노드에 영역에 포함
      // root.left가 비어있으면 할당.
      if (root.left === null) root.left = newNode;
      else this.insertNode(root.left, newNode);
    } else {
      // 우측 자식 노드에 대해서도 같은 로직 수행
      if (root.right === null) root.right = newNode;
      else this.insertNode(root.right, newNode);
    }
  }

  // 존재여부를 bool값으로 반환
  search(root, value) {
    // if (!root) return false;

    // console.log(root);
    // console.log(value);

    // if (root.value === value) return true;
    // else if (value < root.value) this.search(root.left, value);
    // else this.search(root.right, value);
    //
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.left, value);
      }
    }
  }
}

const bst = new BinarySearchTree();

// console.log(bst.root); // null
// console.log(bst.isEmpty()); // true

bst.insert(10);
bst.insert(5);
bst.insert(15);

// 추가한 값을 확인하려면 검색기능이 존재해야 함

console.log(bst.search(bst.root, 10)); // true
console.log(bst.search(bst.root, 2)); // false
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 7));
// node binary_search_tree.js
