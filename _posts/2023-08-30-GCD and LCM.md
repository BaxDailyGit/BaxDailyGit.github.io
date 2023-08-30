---
layout: single
published: true
title:  "GCD와 LCM"
categories: Algorithm
date: 2023-08-29 13:30:00
toc: true
toc_sticky: true
---

# GCD와 LCM

### 개요
알고리즘 문제를 풀다보면 GCD(최대공약수)와 LCM(최소공배수)가 필요할때가 있다. 그럴때마다 매번 인터넷에 검색해서 유클리드 호제법을 이해하고 구현하는것이 번거로워 이참에 정리하여 익히기로 했다.

----------------

### 유클리드 호제법

호제법이란 말은 두 수가 서로 상대방 수를 나누어서 결국 원하는 수를 얻는 알고리즘이다.  
유클리드 호제법을 통해서 GCD를 구할 수 있다.



----------------

### GCD

```java
public static int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}
```

두 수 A와 B의 최대공약수(GCD)를 구하는 과정:
* A를 B로 나눈 나머지를 R로 나타냅니다. 즉, R = A % B 이다.
* 만약 R이 0이라면, B가 최대공약수가 됩니다. GCD(A, B) = B이다.
* R이 0이 아니라면, A에는 원래의 B 값이 들어가고, B에는 R 값이 들어간다.
* 위 과정을 반복하여 B를 R로 나눈 나머지를 구하고, R이 0이 될 때까지 계속한다.
* 최종적으로 R이 0이 되었을 때의 B 값이 최대공약수가 된다.




### LCM\

```java
public static int lcm(int a, int b) {
    return (a * b) / gcd(a, b); 
}
```

LCM같은 경우 두 수를 곱하고 이전에 구한 GCD로 나누면 된다.


----------------

GCD나 LCM같은경우 간단하므로 반복문보다 구현하기 빠르고 직관적인 재귀함수로 구현하는게 좋다.



