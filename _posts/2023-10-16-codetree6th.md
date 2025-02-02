---
layout: single
published: true
title:  "[코드트리 챌린지] 코드트리 여섯번째 실력진단평가"
categories: Codetree
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



![스크린샷 2023-10-31 122230](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/4685ca49-617b-4119-a8a3-848c9a658560)
![스크린샷 2023-10-31 122247](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/365c5b0b-4995-4c5c-9334-0199754e2155)




----------------

#### 나의 풀이 코드



```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String commands = scanner.next(); 
        scanner.close();

        int dirNum = 0; // 초기 방향 (북)
        int x = 0, y = 0;
        int[] dx = new int[]{0, -1, 0, 1}; 
        int[] dy = new int[]{1, 0, -1, 0}; 

        for (char command : commands.toCharArray()) {
            if (command == 'L') {
                // 왼쪽으로 회전 (시계 반대 방향)
                dirNum = (dirNum + 1) % 4;
            } else if (command == 'R') {
                // 오른쪽으로 회전 (시계 방향)
                dirNum = (dirNum + 3) % 4;
            } else if (command == 'F') {
                // 현재 방향으로 이동
                x += dx[dirNum];
                y += dy[dirNum];
            }
        }

        // 최종 위치 출력
        System.out.println(x + " " + y);
    }
}

```




#### 배운점


저번에는 동서남북으로 이동을 배웠다면 이번에는 바라보는 방향기준 90도 회전하는 법을 배웠다.
