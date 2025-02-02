---
layout: single
published: true
title:  "[코드트리 챌린지] 코드트리 네번째 실력진단평가"
categories: Codetree
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

이번 점수는 498점이 나왔다.  
![KakaoTalk_20231002_235052626](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/120d0e1d-3720-4e55-aa6e-539fecef0160)

조금씩 점수가 오르기 시작한다.

<br>

## 진단 요약

![KakaoTalk_20231002_234550389](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/007a5f76-7e84-4b4d-b9c9-e665e1e2bc6c)

2차원 배열을 마저 학습하고 시뮬레이션으로 넘어가야겠다.  
내가 무엇이 부족한지 진단해주는 부분이 코드트리의 장점인것 같다.

## 인상깊은 문제

### 격자 반대로 채우기

#### 문제 설명

n x n 크기의 격자에 정수를 채워넣으려고 합니다. 1부터 시작해서 차례대로 n 
2
 까지 채워넣는데, 다음 그림과 같이 오른쪽 아래에서 부터 위 아래 지그재그 방향으로 채워넣는 프로그램을 작성해보세요.
 
<img width="261" alt="ea8b7f0f-4948-4dab-b621-fd2e2674d7d5" src="https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/4d4ad4be-7842-4e3b-9711-40e9a52b814e">

----------------

#### 제한사항

시간 제한: 1000ms
메모리 제한: 80MB


----------------

#### 입력 예

```
4
```

#### 출력 예


```
1 1 1 1 1
13 12 5 4
14 11 6 3
15 10 7 2
16 9 8 1
```

----------------



----------------

#### 나의 풀이 코드

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n=0;
        n = sc.nextInt();
        int[][] arr = new int[n][n];

        int count = 1;

        if (n%2 == 0){
            for(int c=n-1; c>=0; c--){
            if (c%2 == 1){
                for(int r=n-1; r>=0; r--){
                    arr[r][c] = count;
                    count++;
                }
            }
            else if (c%2 == 0){
                for(int r=0; r<n; r++){
                    arr[r][c] = count;
                    count++;
                }
            }
        }
        }

        if (n%2 == 1){
            for(int c=n-1; c>=0; c--){
            if (c%2 == 0){
                for(int r=n-1; r>=0; r--){
                    arr[r][c] = count;
                    count++;
                }
            }
            else if (c%2 == 1){
                for(int r=0; r<n; r++){
                    arr[r][c] = count;
                    count++;
                }
            }
        }
        }
    
        for(int i=0; i<n; i++) {
	        for(int j=0; j<n; j++) {
		        System.out.print(arr[i][j] +" "); 
	        }
            System.out.println();
        }
    }
}
```




#### 배운점

<p>
푸는데 시간이 많이 걸린 문제였다. 어렵게 풀고 해설을 보는데 코드가 너무 간결하고 쉬웠다.
</p>

지금껏 띄엄 띄엄 풀어왔더니 이전 문제들에서 학습해야 할 부분(스킬)을 놓친것이었다.

진도가 느리더라도 커리큘럼을 믿고 차근차근 가야 구멍이 안생길것 같다.
