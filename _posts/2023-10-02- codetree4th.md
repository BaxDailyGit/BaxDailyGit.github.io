---
layout: single
published: true
title:  "[코드트리 챌린지] 코드트리 네번째 실력진단평가"
categories: Algorithm-Codetree
date: 2023-10-02 23:55:43
toc: true
toc_sticky: true
tag:   
  - 코드트리
  - 코딩테스트
  - 코딩테스트실력진단
---
<br>

추석 연휴를 하루 남기고 실력 진단 평가를 보았다.

## 4번째 실력진단평가

나를 힘들게 만들었던 격자 문제를 풀었다.  
다만 다음문제에서 막혔다. 시간이 조금만 더있었더라면... 

## 결과

이번 점수는 446점이 나왔다.  
![화면 캡처 2023-09-25 231446](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/edeb2ccb-0f64-4564-9a2f-ab2631834871)

조금씩 점수가 오르기 시작한다.

<br>

## 진단 요약

![화면 캡처 2023-09-25 231748](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/3b0f7dbd-c5f1-459a-8b25-56535b265444)

2차원 배열을 마저 학습하고 시뮬레이션으로 넘어가야겠다.  
내가 무엇이 부족한지 진단해주는 부분이 코드트리의 장점인것 같다.

## 학습한 문제

### 배열로 사각형 만들기

#### 문제 설명

배열을 만들어서 아래 조건을 만족해 출력하는 프로그램을 작성해보세요.

첫 번째 행과 첫 번째 열은 모두 1로 초기화 합니다.
나머지 칸들은 바로 위의 값과 바로 왼쪽의 값을 더합니다.
크기는 5 * 5 입니다.

----------------

#### 제한사항


시간 제한: 1000ms
메모리 제한: 80MB


----------------

#### 입력 예



#### 출력 예


```
1 1 1 1 1
1 2 3 4 5
1 3 6 10 15
1 4 10 20 35
1 5 15 35 70

```

----------------



----------------

#### 나의 풀이 코드

```java
public class Main {
    public static void main(String[] args) {
        int n = 5;
        int[][] arr2d = new int[n][n];

        for (int i=0;  i<n; i++) {
            arr2d[i][0] = 1;
        }
        for (int j=0; j<n; j++) {
            arr2d[0][j] = 1;
        }

        for (int i=1; i<n; i++) {
            for (int j=1; j<n; j++) {
                arr2d[i][j] = arr2d[i-1][j] + arr2d[i][j-1] ;
            }
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(arr2d[i][j] + " ");
            }
            System.out.println();
        }

    }
}
```




#### 배운점

```java
for(int i = 0; i < 5; i++) {
    arr[i][0] = 1;
    arr[0][i] = 1;
}
```    
<p>
시간복잡도는 달라지지 않겠지만 그래도 행과 열을 함께 초기화 할 생각을 못했다. 센스있게 풀자.
</p>

