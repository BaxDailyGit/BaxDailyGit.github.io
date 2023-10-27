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

일주일이 지나 다시금 진단 평가를 보았다.  학교 시험과 정보처리기사 공부로 인해서 알고리즘 공부를 거의 못하긴 했다.

드디어 백트래킹 문제를 시간안에 풀고 이후 BFS/DFS 문제가 나왔다. 마을의 크기를 구하는 문제였는데 인접한 집(요소)들을 어떻게 찾을지 아이디어가 시간안에 떠오르지 않았다.

## 결과

이번 점수는 647점이 나왔다.  
![스크린샷 2023-10-22 181806](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/cef652ed-a120-40c3-8d3d-155cf78622c5)


<br>

## 진단 요약


![스크린샷 2023-10-22 181520](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/b471e437-5097-443f-a6b2-bba19db9e45c)

![스크린샷 2023-10-22 181614](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/b3537e67-7034-4031-bf55-66dc2761a4b5)

## 평가 후 푼 문제

평가 후에 나오는 관련 문제들을 풀었다. 

### 그래프 탐색


![스크린샷 2023-10-22 192116](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/091eea99-37f7-4686-ae77-0d29afbf9eda)

![스크린샷 2023-10-22 192136](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/836db4fd-ad6f-4a0a-a6cf-c9cf7056d909)

![스크린샷 2023-10-22 192204](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/e2df546e-4b59-4e6c-901d-853980ea160f)



----------------

#### 나의 풀이 코드



```java
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static final int MAX_NUM = 1000; //최대 정점 수를 나타내는 상수
    public static int n, m; //정점 수, 간선 수

    // index를 1번 부터 사용하기 위해 MAX_NUM+1만큼 할당
    public static int[][] graph = new int[MAX_NUM + 1][MAX_NUM + 1]; //각 정점 간의 연결 관계를 알기 위한 그래프
    public static boolean[] visited = new boolean[MAX_NUM + 1]; //정점 방문 여부를 아는 배열
    public static int vertexCnt = 0; //연결된 정점의 수




    public static void DFS(int vertex) { //재귀적으로 그래프를 탐색하고 연결된 정점의 수를 증가시키는 DFS 메서드
        for(int currV = 1; currV <= n; currV++) {
            //주어진 vertex에서 시작하여 아직 간선이 존재하고 방문한 적이 없는 정점에 대해서만 탐색을 진행(해당 정점에서 이어져있는 모든 정점을 탐색)
            if(graph[vertex][currV] == 1 && !visited[currV]) { // 정점 방문
                visited[currV] = true; // visited 배열에 표시
                vertexCnt++; // vertexCnt가 증가
                DFS(currV); //재귀
            }
        }
    }




    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();

        while(m-- > 0) {
            //양방향 그래프(각 정점이 서로 이동이 가능)이기 때문에 각 정점 쌍에 대한 간선을 graph 배열에 1로 표시
            int v1 = sc.nextInt();
            int v2 = sc.nextInt();

            graph[v1][v2] = 1;
            graph[v2][v1] = 1;
        }
       
        visited[1] = true;
        DFS(1);

        System.out.println(vertexCnt); //연결된 정점의 수 출력
    }
}
```




#### 배운점


그래프의 연결 요소의 크기를 구하기 위해 깊이 우선 탐색(DFS) 알고리즘을 새롭게 배워 활용하였다. 다만 위 코드는 **인접 행렬**을 활용하였는데 **인접 리스트**를 활용하면 불필요한 탐색을 피할수가 있다.  
조금더 관련 문제들을 풀어봐야 겠다.