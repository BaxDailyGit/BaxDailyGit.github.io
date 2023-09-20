---
layout: single
published: true
title:  "[Spring Boot]Spring Boot로 간단한 API 구현하기"
categories: SpringBoot
date: 2023-09-17 02:35:00
toc: true
toc_sticky: true
tag:   
  - 자바 (Java)
  - 접근제어자 (AccessModifiers)
  - 정보은닉 (Encapsulation)
---

# Spring Boot로 간단한 API 구현하기

`인텔리제이에서 새 프로젝트를 만들고 실행하고 나서 브라우저에서 localhost:8080을 입력했을때 Whitelabel Error Page가 뜨도록 하였습니다.`

이제 간단한 API 구현해보겠습니다.

## @ annotation이란?

어노테이션은 기능을 갖는 주석입니다. 

아래 코드를 보며 예를 들어보겠습니다.

```java
@RestController
public class TestController {

}
```
`@RestController`라는 어노테이션으로 api 요청을 `TestController` 클래스에서 받아줄것이라고 표현해줍니다.

```java
    @GetMapping("api/name")
    public String name() {
        String name = "bax";
        return name;
    }
```
이후 위 코드와 같이 `@GetMapping`이라는 어노테이션으로 localhost라는 도메인을 갖고 get메소드라고 오는 요청 그 뒤에 오는 url을 판단해서 매핑해줍니다.

한번 실행하고 브라우저에서 확인해보겠습니다.


<p align="left"><img src="https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/44cab66a-e5c8-47ec-991a-2bcc143f9f49" width="40%" height="40%"></p>   
