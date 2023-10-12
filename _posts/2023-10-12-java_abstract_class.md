---
layout: single
published: true
title:  "[JAVA]추상클래스"
categories: Java
date: 2023-10-12 13:32:00
toc: true
toc_sticky: true
tag:   
  - 자바
  - Java
---

## 추상 클래스 (abstract class)

추상클래스를 미완성 설계도에 비유할 수 있다.
즉, 미완성 메서드 (추상 메서드)를 포함한다는 의미이다.

추상클래스로 인스턴스를 생성 할 수 없고 오직 상속을 통해서 자손클래스에 의해서만 완성될 수 있다.

예시 코드를 보면서 알아보자.


```java
abstract class 클래스이름 {

}
```
추상클래스는 class 앞에 'abstract'를 붙여 사용한다. 
즉, 클래스 선언부의 'abstract'를 보고 이 클래스는 추상메서드가 있으니 상속을 통해서 구현해주어야 한다는것을 알 수 있다.

또한 추상 클래스는 추상 메서드를 포함 하는것을 제외하고 일반 클래스와 다름이 없다. 즉, 생성자와 멤버변수, 메서드도 가질 수 있다.


-----------------


## 추상 메서드 (abstract method)

메서드는 선언과 구현으로 구성되어 있는데 , 여기서 선언부만 작성하고 구현부는 작성하지 않은 채 남겨둔것이 추상메서드이다. 즉, 미완성 메서드이다.

예시 코드를 보면서 알아보자.


```java
//어떤 기능을 수행하려고 추상메서드를 만드는것인지 작성하는것이 좋다.
abstract 리턴타입 메서드이름(); 

```

이때 선언만 하고 구현은 안하므로 {}를 사용하지 않고 ';'(세미콜론)으로 끝마무리한다.

**추상 메서드를 사용하는 이유**는 상속받는 클래스 별로 메서드의 내용이 달라질 수 있기 때문이다. 즉, 조상 클래스에서 선언만 하고 실제 구현은 상속받는 클래스에서 하는것이다.

예시 코드를 보면서 알아보자.

```java
abstract class Player { //추상 클래스
  abstract void play(int pos); //추상 메서드
  abstract void stop(); //추상 메서드
}

class AudioPlayer extends Player {
  void play(int pos)  {
    //구현 작성
  }
  void stop() {
    //구현 작성
  }
}

//추상메서드의 구현이 하나가 없으므로 추상클래스로 지정
abstract class AbstractPalyer extends Player { 
  void play(int pos){
    //구현 작성
  }
}
```
추상 클래스를 상속받은 자손클래스는 오버라이딩을 통해 조상인 추상클래스의 추상메서드를 모두 구현해주어야 한다. 만약 조상 클래스의 추상메서드의 구현이 하나라도 없다면 자손 클래스도 추상클래스로 지정해줘야한다.


<div class="notice--success">
<ul>   
    <li>추상화 : 클래스간의 공통점을 찾아내서 공통의 조상을 만드는 작업</li>
    <li>구체화 : 상속을 통해 클래스를 구현, 확장하는 작업</li>
</ul>
</div>

이후 이어서 작성 예정






















<br>

**관련 포스트**

|번호	  |제목|
|---|---|
|1|[[JAVA]다중 생성자와 메서드 오버로딩](https://baxdailygit.github.io/java/java_multiple_constructors/)|
|2|[[JAVA]접근 제어자(public, private, default, protected)](https://baxdailygit.github.io/java/java_access_modifier/)|

