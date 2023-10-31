---
layout: single
published: true
title:  "[JAVA]제네릭(generic)이란?"
categories: Java
date: 2023-10-31 14:02:00
toc: true
toc_sticky: true
tag:   
  - Java
  - 제네릭
  - generic
---

## 제네릭(generic)이란?

<p>
자바에는 제네릭(generic)이 있습니다. 클래스 명 옆에 <`T`>를 많이 보이는데 이것이 제네릭입니다.
</p>
제네릭은 데이터의 타입(data type)을 일반화한다(generalize)는 것을 의미합니다.  쉽게말하면 타입을 지정해주는 역할이라고 생각하면 됩니다.

아래 코드를 예로 들겠습니다.

```java
public class Gclass<T> {
    private T value; //변수선언

    public Gclass(T value) { //생성자
        this.value = value;
    }

    public T getValue() {  //메서드 구현
        return value;
    }
}
```


> * public class Gclass<T>:  Gclass는 제네릭 클래스로 선언되며, 타입 매개변수인 T를 사용합니다.   
> 이렇게 정의된 T는 클래스 내부에서 임의의 데이터 타입으로 사용됩니다. 이로써 Gclass는 어떤 타입의 데이터도 다룰 수 있습니다.
> 
> * private T value;: 제네릭 타입 T를 가지는 프라이빗 인스턴스 변수 value를 선언합니다.  
> 이 변수는 클래스 내에서 어떤 타입의 값을 저장할 수 있습니다.
> 
> * public Gclass(T value): 생성자는 T 타입의 값을 매개변수로 받아서 value 변수에 할당합니다.  
> 저장할 값의 타입은 객체가 생성될 때 결정됩니다.
> 
> * public T getValue(): 이 메서드는 T 타입의 값을 반환하므로 객체가 저장한 데이터 타입에 따라 반환 타입이 결정됩니다.

<br>

위 Gclass 클래스를 사용하면 아래 코드와 같이 다양한 데이터 타입에 대해 재사용할 수 있으며, 타입 안전성을 확보할 수 있습니다.

```java
Gclass<Integer> intObj = new Gclass<>(10);
int intvalue = intObj.getValue(); // value는 10

Gclass<String> strObj = new Gclass<>("Hello, World!");
String strValue = strObj.getValue(); // strValue는 "Hello, World!"
```

<br>

<div class="notice--success">
<ul>   
자바에서 타입 변수 자리에 사용할 실제 타입을 명시할 때 기본 타입을 바로 사용할 수는 없습니다.
이때는 위처럼 Integer나 String과 같이 래퍼(wrapper) 클래스를 사용해야만 합니다.
</ul>
</div>




래퍼(wrapper) 클래스대해서는 추후에 포스팅하겠습니다.





#### 관련 포스트

|번호	  |제목|
|---|---|
|1|[[JAVA]다중 생성자와 메서드 오버로딩](https://baxdailygit.github.io/java/java_multiple_constructors/)|
|2|[[JAVA]접근 제어자(public, private, default, protected)](https://baxdailygit.github.io/java/java_access_modifier/)|







