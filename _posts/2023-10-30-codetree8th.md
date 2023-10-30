---
layout: single
published: true
title:  "[코드트리 챌린지] 코드트리 여덟번째 실력진단평가"
categories: Algorithm-Codetree
date: 2023-10-30 23:45:43
toc: true
toc_sticky: true
tag:   
  - 코드트리
  - 코딩테스트
  - 코딩테스트실력진단
---
<br>


## 8번째 실력진단평가

일주일이 지나 다시금 진단 평가를 보았다. 

DFS 문제를 시간안에 풀고 이후 dp 문제가 나왔다. 주어진 행렬에서 시작지점부터 도착지점까지 거쳐간 위치에 적혀있는 숫자의 합을 최대로 하도록 짜야했는데 결국 시간안에 못풀었다.

## 결과

이번 점수는 647점이 나왔다.  
![스크린샷 2023-10-30 224002](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/fb3e4c1f-341c-4e18-b406-bfe9de159a7d)

<br>

## 진단 요약


![스크린샷 2023-10-30 223715](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/3b96d691-449b-438e-a08a-f1854f36154d)

![스크린샷 2023-10-30 223758](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/76d56fdd-009a-48cd-af60-b7110c3cdbfb)

백트래킹과 dfs,bfs를 거쳐 dp문제를 풀기까지 항상 연습이 부족하다는 생각이 든다. 익숙하고 빠르게 코드를 짤수 있도록 문제를 풀어야 한다.


## 평가 후 푼 문제

### 연결된 그래프

![스크린샷 2023-10-30 233542](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/d2ed0508-ec34-4674-8540-11274f0929ec)
![스크린샷 2023-10-30 233600](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/7e31b3b8-be48-46e9-b87b-9b16e7193488)

----------------

#### 나의 풀이 코드



```java
import java.util.*;

public class ConnectedNodesCount {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt(); // 노드의 총 개수
        int m = scanner.nextInt(); // 연결된 노드 쌍의 개수

        // 그래프를 표현할 인접 리스트 생성
        ArrayList<Integer>[] adjacencyList = new ArrayList[n + 1];
        for (int i = 1; i <= n; i++) {
            adjacencyList[i] = new ArrayList<>();
        }

        // 그래프 연결 정보 입력
        for (int i = 0; i < m; i++) {
            int u = scanner.nextInt();
            int v = scanner.nextInt();
            adjacencyList[u].add(v);
            adjacencyList[v].add(u);
        }

        // 방문 여부를 저장할 배열
        boolean[] visited = new boolean[n + 1];

        // DFS 함수 호출하여 1번 노드와 연결된 노드 개수 구하기
        int connectedNodesCount = dfs(1, adjacencyList, visited);

        // 1번 노드 자신을 제외한 연결된 노드 개수 출력
        System.out.println(connectedNodesCount - 1);
    }

    // DFS 함수
    private static int dfs(int node, ArrayList<Integer>[] adjacencyList, boolean[] visited) {
        visited[node] = true;
        int connectedNodesCount = 1; // 현재 노드를 포함한 연결된 노드 개수

        for (int neighbor : adjacencyList[node]) {
            if (!visited[neighbor]) {
                connectedNodesCount += dfs(neighbor, adjacencyList, visited);
            }
        }

        return connectedNodesCount;
    }
}

```

1번 노드를 시작으로 DFS를 사용하여 1번 노드와 연결된 모든 노드의 개수를 찾아내고, 이 중에서 1번 노드 자신을 제외한 연결된 노드의 개수를 출력한다.




