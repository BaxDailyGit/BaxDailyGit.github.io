---
layout: single
published: true
title:  "[알고리즘 개념]방향벡터 dx, dy 기법"
categories: Algorithm
date: 2024-01-27 19:10:00
toc: true
toc_sticky: true
---

## 방향벡터 dx, dy 기법

### 개요

알고리즘 문제를 풀다보면 2차원 공간에서 이동하거나 상태를 갱신하는 시뮬레이션 문제가 나온다. 이번 글에서는 이때 사용하면 편한 dx, dy배열에 대해서 정리해보도록 한다. 

----------------

### 방향 벡터

그냥 방향만을 나타내는 벡터라고 생각하면 된다.
미적분에서도 나오는 기초개념이다. 

----------------

### 알고리즘에서 dx, dy 스킬

예를들면,

2차원공간의 어떤 위치에서 지정된 방향으로 이동하려고 할때
 단순히 배열 인덱스를 하나하나 수정해주는 방법도 있지만,  
방향 정보를 배열에 미리 저장해두어서 원하는 방향으로 이동하고 싶을때 사용하면 더 간편하고 깔끔하다.

아래 코드를 보자.

```java
int dirNum = 3;         // 이동 방향을 지정
int x = 4, y = 5;       // 현재 위치는 (4, 5)이다.
int[] dx = new int[]{1, 0, -1, 0};  // x에 해당하는 방향 정보를 저장
int[] dy = new int[]{0, -1, 0, 1};  // y에 해당하는 방향 정보를 저장
int nx, ny;       


// 위치를 이동하는 연산
nx = x + dx[dirNum];
ny = y + dy[dirNum];
```

위 코드에서는 dirNum이 3이기 때문에 북쪽으로 한칸 이동할것이다.

이처럼 dx, dy 배열을 만들기만 한다면 배열에 인덱스만 바꾸어서 사용해주기만 하면 된다.