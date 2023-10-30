---
layout: single
published: true
title:  "[코드트리 챌린지] 코드트리 일곱번째 실력진단평가"
categories: Algorithm-Codetree
date: 2023-10-22 19:12:43
toc: true
toc_sticky: true
tag:   
  - 코드트리
  - 코딩테스트
  - 코딩테스트실력진단
---
<br>


## 7번째 실력진단평가

일주일이 지나 다시금 진단 평가를 보았다.  

드디어 백트래킹 문제를 시간안에 풀고 이후 BFS/DFS 문제가 나왔다. 마을의 크기를 구하는 문제였는데 인접한 집(요소)들을 어떻게 찾을지 아이디어가 시간안에 떠오르지 않았다.

## 결과

이번 점수는 647점이 나왔다.  
![스크린샷 2023-10-22 181806](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/cef652ed-a120-40c3-8d3d-155cf78622c5)


<br>

## 진단 요약


![스크린샷 2023-10-22 181520](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/b471e437-5097-443f-a6b2-bba19db9e45c)

![스크린샷 2023-10-22 181614](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/b3537e67-7034-4031-bf55-66dc2761a4b5)

## 평가 후 푼 문제



### 그래프 탐색

![277159172-091eea99-37f7-4686-ae77-0d29afbf9eda](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/b2cf13c2-be2e-4555-bf8d-96431fecb79e)

![277159179-e2df546e-4b59-4e6c-901d-853980ea160f](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/db8129c0-7364-4efd-b9bd-4ed5ff065ea5)




----------------

#### 나의 풀이 코드



```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int m = scanner.nextInt();

        ArrayList<Integer>[] adjList = new ArrayList[n + 1];
        for (int i = 1; i <= n; i++) {
            adjList[i] = new ArrayList<>();
        }

        for (int i = 0; i < m; i++) {
            int x = scanner.nextInt();
            int y = scanner.nextInt();
            adjList[x].add(y);
            adjList[y].add(x);
        }

        boolean[] visited = new boolean[n + 1];

        int result = dfs(1, adjList, visited);

        System.out.println(result - 1);
    }

    private static int dfs(int node, ArrayList<Integer>[] adjList, boolean[] visited) {
        visited[node] = true;
        int count = 1;

        for (int neighbor : adjList[node]) {
            if (!visited[neighbor]) {
                count += dfs(neighbor, adjList, visited);
            }
        }

        return count;
    }
}


```

사용자로부터 정점의 수(n)와 간선의 수(m)를 입력받고,  
그래프를 나타내는 인접 리스트(adjList)를 생성하고 초기화,  
m번 반복하여 간선 정보를 입력받아 인접 리스트에 추가하고, 양쪽 방향으로 연결,  
방문 여부를 저장하는 배열(visited)을 초기화,  
DFS 함수를 호출하여 1번 정점에서 시작하여 도달 가능한 정점의 수를 계산,  
결과에서 1번 정점을 제외하고, 도달 가능한 다른 정점의 수를 출력


#### 배운점

양방향 그래프에서 DFS를 사용하여 연결된 정점을 찾아내는 방법을 이해할수 있었다.