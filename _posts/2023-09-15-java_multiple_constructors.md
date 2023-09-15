---
layout: single
published: true
title:  "[JAVA]다중 생성자와 메서드 오버로딩"
categories: Java
date: 2023-09-15 16:26:00
toc: true
toc_sticky: true
tag:   
  - Computer System
  - Hardware
  - Software
  - Linux Kernel
  - Terminal
---
# Java 다중 생성자 (Multiple Constructors) 정리

Java에서 클래스는 다중 생성자를 가질 수 있습니다. 다중 생성자는 동일한 클래스의 객체를 다양한 방법으로 초기화할 수 있게 해줍니다. 다중생성자를 알기 전에 생성자를 보겠습니다.

## 생성자란?

생성자는 객체의 초기화를 담당하는 메서드입니다. 클래스의 객체가 생성될 때 자동으로 호출되며, 멤버 변수를 초기화하거나 다른 초기화 작업을 수행하는 데 사용됩니다.객체의 생성 시에 호출되기 때문에 생성자라는 이름이 붙었습니다.

## 기본 생성자 (Default Constructor)

클래스에 아무 생성자도 정의하지 않으면 자동으로 기본 생성자가 생성됩니다. 기본 생성자는 매개변수를 받지 않으며, 아무런 동작도 수행하지 않습니다.

```java
public class Book {

    // 기본 생성자
    public MyClass() {
    }
    
}
```

# 다중 생성자 정의하기

클래스에서 다중 생성자를 정의하는 것은 가능합니다. 생성자는 매개변수의 수, 데이터 타입 및 순서에 따라 구분됩니다.



```java
public class MyClass {
    private int value;

    // 기본 생성자
    public MyClass() {
        value = 0;
    }

    // 매개변수를 받는 생성자
    public MyClass(int value) {
        this.value = value;
    }
}
```




# 생성자 오버로딩 (Constructor Overloading)

다중 생성자를 정의함으로써 생성자 오버로딩을 구현할 수 있습니다. 생성자 오버로딩은 동일한 클래스에서 서로 다른 매개변수 목록을 가진 여러 생성자를 가지는 것을 의미합니다.


```java
public class MyClass {
    private int value;

    // 기본 생성자
    public MyClass() {
        value = 0;
    }

    // int 타입 매개변수를 받는 생성자
    public MyClass(int value) {
        this.value = value;
    }

    // String 타입 매개변수를 받는 생성자
    public MyClass(String str) {
        this.value = Integer.parseInt(str);
    }
}
```




# 생성자 호출하기

객체를 생성할 때 어떤 생성자를 호출할 것인지는 new 연산자와 함께 생성자의 매개변수를 지정하여 결정됩니다.

```java
MyClass obj1 = new MyClass(); // 기본 생성자 호출
MyClass obj2 = new MyClass(42); // int 값을 받는 생성자 호출
MyClass obj3 = new MyClass("123"); // String 값을 받는 생성자 호출
```
















