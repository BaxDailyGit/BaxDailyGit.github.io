---
layout: single
published: true
title:  "[코드트리 챌린지] 코드트리 두번째 실력진단평가"
categories: Algorithm-Codetree
date: 2023-09-18 23:55:00
toc: true
toc_sticky: true
tag:   
  - 코드트리
  - 코딩테스트
  - 코딩테스트실력진단
---



<br>

## 두번째 실력진단평가

그동안 문제를 하루에 한문제씩만 풀었다. 진단평가를 보기전 점수가 오를것 같지 않았지만 그래도 응시하였다.  


응시했는데 저번과 똑같은 문제가 나왔다. 하지만 세번째 문제에서 또 한번 좌절을 맛보았다. 2차원 배열을 입력하고 해당 범위의 요소들을 합하는 단순한 문제임에도 구현을 10분 만에 하는것이 어려웠다. 

## 결과

이번 점수도 393점이었다.  
![KakaoTalk_20230911_160059720](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/fa03efeb-d59c-4ede-99a5-e979a4e15706)


아쉽긴 하지만 다음에는 좋은 점수를 받을수 있을것 같았다.


<br>

## 진단 요약

![화면 캡처 2023-09-18 235235](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/8d04113c-3467-432c-9223-aece4dcbd843)

배열에 대해서 더 많이 공부해야겠다.


<br>


<br>

## 인상 깊은 문제

### 특정 위치의 문자

#### 문제 설명

<p>
6개의 문자 배열을 만들고 각각 'L', 'E', 'B', 'R', 'O', 'S'로 초기화한 후에, 문자 한 개가 주어지면 배열의 위치를 출력하는 프로그램을 작성해보세요. 배열의 첫 번째 위치는 0번이며 배열에 없는 문자가 주어지면 "None"이라는 메시지를 출력합니다.
</p>

----------------

#### 제한사항


시간 제한: 1000ms
메모리 제한: 80MB


----------------

#### 입력 예

첫 번째 줄에 문자가 한개 입력됩니다.

* 1 ≤ 주어지는 정수 ≤ 100

```
B
```


#### 출력 예

첫 번째 줄에 문자에 해당되는 배열의 위치를 출력합니다.

```
2
```

----------------




----------------

#### 나의 풀이 코드

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char[] word = new char[]{ 'L', 'E', 'B', 'R', 'O', 'S' };
        char alpha; 
        int idx = -1;

        alpha = sc.next().charAt(0);

        for (int i = 0; i < word.length; i++) {
            if (word[i] == alpha) {
                idx = i;
            }
        }


        if (idx == -1) {
            System.out.println("None");
        }
        else {
            System.out.println(idx);
        }
    }
}
```




#### 배운점


<p>
char을 입력받을때는 다른 타입과 달리 sc.next().charAt(0)을 사용한다.
</p>

