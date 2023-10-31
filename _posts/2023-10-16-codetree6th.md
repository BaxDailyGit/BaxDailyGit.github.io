---
layout: single
published: true
title:  "[코드트리 챌린지] 코드트리 여섯번째 실력진단평가"
categories: Algorithm-Codetree
date: 2023-10-16 23:45:43
toc: true
toc_sticky: true
tag:   
  - 코드트리
  - 코딩테스트
  - 코딩테스트실력진단
---
<br>


## 6번째 실력진단평가

일주일이 지나 다시금 진단 평가를 보았다.  

3번 문제인 격자 문제는 풀었지만 이후 백트래킹 문제를 시간안에 못풀었다. 이후 시뮬레이션 문제를 풀었다. 전에는 동서남북, 이동거리를 구현하였던것으로 기억하는데 이번에는 오른쪽으로 90도 회전과 앞으로 전진 기능을 구현하도록 했다.

## 결과

이번 점수는 506점이 나왔다.  
![스크린샷 2023-10-30 205951](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/f7c35392-8ef2-47ea-aa63-7b93892b3001)




<br>

## 진단 요약

![스크린샷 2023-10-30 205635](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/6b3274db-8fba-485e-b936-61472d340eb2)


![스크린샷 2023-10-30 205705](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/84e938a2-0f40-4848-920b-8b46ad7974ba)

## 평가 후 클리닉 문제


### 방향에 맞춰 이동


![스크린샷 2023-10-09 233457](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/cb32c56e-c34c-445f-a119-77e22893d39b)


![스크린샷 2023-10-09 233520](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/36c8c843-e322-4384-9d5c-2be3aec9c6a6)


![스크린샷 2023-10-09 233541](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/068a038e-be50-421d-a5fc-e8a3430def83)





----------------

#### 나의 풀이 코드



```java
import java.util.Scanner;

public class Main {
    public static int n, x, y;

    //dx, dy를 정의
    public static int[] dx = new int[]{1, -1,  0, 0}; //동 서
    public static int[] dy = new int[]{0,  0, -1, 1}; //남 북

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();

        // 입력 방향에 따른 이동하는 반복문
        while(n-- > 0) {
            char cDir = sc.next().charAt(0); //방향
            int dist = sc.nextInt(); //거리
            
            //방향에 따른 dir 숫자 정하기
            int dir;
            if(cDir == 'E')
                dir = 0;
            else if(cDir == 'W')
                dir = 1;
            else if(cDir == 'S')
                dir = 2;
            else
                dir = 3;
            
            // 입력된 방향으로 dist 거리만큼 이동 후의 위치
            x += dx[dir] * dist;
            y += dy[dir] * dist;
        }
    
        System.out.print(x + " " + y);
    }
}
```




#### 배운점



