# 트리 자료구조

트리 자료구조에 대해 알아보자.

목표: 트리 자료구조를 JavaScript코드로 구현하고 설명해봐라 했을 때 언제든지 자연스럽게 설명할 수 있는 수준으로 공부하기 + 왜 사용되는지 이해하기

## 기본적인 내용

- hierarchical data structure consisted of nodes connected by edges
- typically each node save a data value
- is a non-linear data structure -> 선형적 자료구조는 탐색에 소요되는 시간이 데이터의 양에 비례하지만, 트리는 비선형적인 특성 덕분에 보다 빠르게 데이터를 탐색하고 접근할 수 있음
- a tree does not contain loops or cycles

## 트리의 대표적인 사용처

- 파일 시스템
- DOM
- 챗봇
- Abstract syntax trees

## 트리 관련 개념들

**부모, 자식 노드**

계층적으로 보았을 때 한단계 위의 바로 연결되어 있는 노드가 부모 노드, 한 단계 아래에 바로 연결되어 있는 노드가 자식 노드임

**root node**

가장 위에 위치한 노드, 부모 노드가 없음

**leaf node**

가장 아래에 위치한, 더 이상 자식 노드가 없는 노드

**siblings**

같은 부모 노드를 가진 자식 노드는 형제 노드

**degree 차수**

한 노드가 가지고 있는 자식의 수

**depth**

루트 노드에서 해당 노드까지의 간선의 수

**height**

가장 아래에 위치한 노드로부터 해당 노드까지의 간선의 수

### 추가 공부

**linear vs non-linear**

선형 자료구조

- 하나의 자료 뒤에 하나의 자료가 존재하는 구조
- ex) 배열, 리스트, 스택, 큐, linked list

비선형 자료구조

- 하나의 자료 뒤에 여러 개의 자료가 존재할 수 있는 것
- ex) 트리, 그래프
