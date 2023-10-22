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

3번 문제인 격자 문제는 풀었지만 이후 백트래킹 문제를 시간안에 못풀었다. 이후 시뮬레이션 문제가 나왔지만 10분이란 시간은 너무 적었다. 그만큼 나의 실력이 아직 부족하구나 느낀다.

## 결과

이번 점수는 506점이 나왔다.  
![스크린샷 2023-10-09 233829](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/95731e4e-d2f7-4ddc-ab9c-0402de6c39b6)



<br>

## 진단 요약

![스크린샷 2023-10-09 233338](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/5dfa8aeb-b0d2-46bd-afe6-eff34036d5ed)


![스크린샷 2023-10-09 233415](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/58f6f990-3882-42b9-84c3-8223fd433128)

## 평가 후 클리닉 문제

평가 후에 나오는 관련 문제들을 풀었다. 전에는 바로 끄고 정규 학습 문제를 풀었었는데 그러지 않고 이것을 풀었더라면 점수가 올랐을것 같다.

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

dx, dy 배열을 만들어 특정 방향으로 이동할때 좌표가 어떻게 변하는지 계산하는 방법은 처음 배우는데 조금더 관련 문제들을 풀어봐야겠다.

