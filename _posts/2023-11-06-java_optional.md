---
layout: single
published: true
title:  "[JAVA]옵셔널(Optional)이란?"
categories: Java
date: 2023-11-06 10:02:00
toc: true
toc_sticky: true
tag:   
  - Java
  - 옵셔널
  - Optional
---

## 옵셔널(Optional)이란?

<p>
Optional은 자바 8부터 도입된 클래스로, 값이 없을 수 있는 상황에서 사용하는데 도움을 주는 유틸리티 클래스입니다. Optional은 주로 메서드의 반환 값으로 사용되어, 메서드가 값을 반환하거나 아무 것도 반환하지 않을 때 사용됩니다.

Optional은 null을 방지하고, 코드에서 명시적으로 값의 존재 여부를 다룰 수 있도록 해줍니다. 
  

<br>

### Optional 생성:

```java
Optional<String> nonEmptyOptional = Optional.of("값이 있어요");
Optional<String> emptyOptional = Optional.empty();
```

> Optional은 값의 존재 여부에 따라 두 가지 상태를 나타냅니다. 값을 포함하면 Optional 객체는 해당 값을 가지고 있으며, 값을 포함하지 않으면 >Optional.empty()를 사용하여 빈 Optional 객체를 생성합니다.

### null 방지:

> Optional을 사용하면 메서드가 null을 반환하는 상황을 방지할 수 있습니다. 대신, 메서드가 빈 Optional을 반환하면 값을 포함하지 않음을 나타냅니다




### 값의 존재 여부 확인:

> isPresent() 메서드를 사용하여 Optional 객체가 값을 가지고 있는지 확인할 수 있습니다.

```java
if (nonEmptyOptional.isPresent()) {
    // 값이 존재하는 경우 처리
    }
```    




### 값 추출:

> get() 메서드를 사용하여 Optional 객체에서 값을 추출할 수 있습니다. 그러나 get()을 호출하기 전에 isPresent()로 값을 확인하는 것이 좋습니다.

> ```java
> if (nonEmptyOptional.isPresent()) {
>     String value = nonEmptyOptional.get();
> }
> ```    


### 값이 존재하지 않는 경우 대체 값 제공:

> orElse() 또는 orElseGet() 메서드를 사용하여 값이 존재하지 않는 경우 기본값을 제공할 수 있습니다.

```java
String result = emptyOptional.orElse("기본값");
String result = emptyOptional.orElseGet(() -> "기본값을 생성하는 로직");
```  



### 값이 존재하지 않는 경우 예외 던지기:

> orElseThrow() 메서드를 사용하여 값이 존재하지 않는 경우 원하는 예외를 던질 수 있습니다.

```java
String result = emptyOptional.orElseThrow(() -> new >NoSuchElementException("값이 없습니다."));
```  





*관련 포스트*

|번호	  |제목|
|---|---|
|1|[[JAVA]다중 생성자와 메서드 오버로딩](https://baxdailygit.github.io/java/java_multiple_constructors/)|
|2|[[JAVA]접근 제어자(public, private, default, protected)](https://baxdailygit.github.io/java/java_access_modifier/)|







