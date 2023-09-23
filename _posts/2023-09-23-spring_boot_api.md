---
layout: single
published: true
title:  "[Spring Boot]Spring Boot로 간단한 API 구현하기"
categories: SpringBoot
date: 2023-09-23 11:00:00
toc: true
toc_sticky: true
tag:   
  - Spring Boot (스프링 부트)
  - API 구현 (API Implementation)
  - 어노테이션 (Annotations)
  - REST API (REST API)
---

# Spring Boot로 간단한 API 구현하기

`인텔리제이에서 새 프로젝트를 만들고 실행하고 나서 브라우저에서 localhost:8080을 입력했을때 Whitelabel Error Page가 뜨도록 하였습니다.`

이제 간단한 API 구현해보겠습니다.

## 1. @ annotation이란?

어노테이션은 기능을 갖는 주석입니다. 

아래 코드를 보며 예를 들어보겠습니다.


## 2. 문자열 리턴하는 GET api 생성하기

```java
@RestController
public class TestController {

}
```
**@RestController**라는 어노테이션으로 api 요청을 `TestController` 클래스에서 받아줄것이라고 표현해줍니다.

```java
    @GetMapping("api/name")
    public String name() {
        String name = "bax";
        return name;
    }
```
이후 클래스 안에서 위 코드와 같이 **@GetMapping**이라는 어노테이션으로 localhost라는 도메인을 갖고 get메소드라고 오는 요청 그 뒤에 오는 url을 판단해서 매핑해줍니다.

한번 실행하고 브라우저에서 확인해보겠습니다.


<p align="left"><img src="https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/44cab66a-e5c8-47ec-991a-2bcc143f9f49" width="40%" height="40%"></p>   

입력란에 http://localhost:8080/api/name 을 입력하니 bax라는 이름이 잘 출력 된 것을 볼 수있습니다.


## 3. Query parameter와 Path로 받아온 이름 리턴하는 GET api 생성하기


* Query parameter

이번엔 Query parameter로 name을 받아서 호출할때 이름을 return해 봅시다.

```java
    @GetMapping("api/test")
    public String query(@RequestParam String name) { 
        return ("안녕하세요 " + name + "입니다.");
    }
```

이미지~~~

입력란에 http://localhost:8080/api/test?name=bax_query 을 입력하니 위와 같이 출력 된 것을 볼 수있습니다.


* Path

이번엔 path로 name을 받아서 호출할때 이름을 return해 봅시다.

```java
@GetMapping("api/test/{name}")
    public String path(@PathVariable String name) { 
        return ("안녕하세요 " + name + "입니다.");
    }
```

이미지~~~

입력란에 http://localhost:8080/api/test/bax_path 을 입력하니 위와 같이 출력 된 것을 볼 수있습니다.

## 4. body로 입력받은 값을 리턴하는 POST api 생성하기

이번에는 @PostMapping와 @RequestBody라는 어노테이션을 사용하여 body 이름을 입력받아 그대로 리턴하는 api 생성해봅시다. 

```java
@PostMapping("/api/post")
    public String requestTest(@RequestBody String name) {
        System.out.println("name = " + name);
        return name;
    }
```

**@PostMapping** 어노테이션은 이름에서 알수 있듯이 HTTP POST 요청을 처리하는 메서드의 경로를 지정하는 기능을 가집니다.

**@RequestBody**클라이언트가 요청 body에 데이터를 담아 서버에 전송하는 기능을 가집니다.  

한번 어플리케이션을 실행하고 POSTMAN 프로그램에서 POST요청후 전송이 되는지 봅시다.

이미지~~~~

여기서 body가 json이나 다른 형식으로 하지 않고 text로 한 이유는 @RequestBody 뒤에 String을 넣어 두었기 때문입니다.

만약 JSON 형식으로 요청하고 싶다면 @RequestBody 뒤에 String이 아닌 클래스를 만들어서 클래스 타입으로 해주시면 됩니다. 클래스 안에는 id라던지 name이라던지 product라던지 아주 다양한 형태의 json을 요청을 받아올수 있습니다.
