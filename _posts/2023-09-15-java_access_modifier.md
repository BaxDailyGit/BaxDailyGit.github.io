---
layout: single
published: true
title:  "[JAVA]다중 생성자와 메서드 오버로딩"
categories: Java
date: 2023-09-16 23:53:00
toc: true
toc_sticky: true
tag:   
  - 자바 (Java)
  - 접근제어자 (AccessModifiers)
  - 정보은닉 (Encapsulation)
---

# 접근 제어자 (public, private, default, protected) 정리

자바에서 클래스, 변수, 메서드 등의 멤버들은 접근 제어자를 사용하여 외부에서의 접근을 제한하거나 허용할 수 있습니다. 네 가지 접근 제어자 `public`, `private`, `default`, `protected`에 대해 아래에 정리합니다.

## 1. `public`

`public` 접근 제어자는 가장 개방적인 접근 제어자로, 어떤 클래스에서든 접근할 수 있도록 허용됩니다. 즉, 다른 클래스에서 해당 멤버변수를 자유롭게 접근할 수 있습니다.



## 2. `private`

`private` 접근 제어자는 해당 클래스 클래스 안에서만 접근이 가능합니다. 정보 은닉(Encapsulation)을 할 수 있습니다.


# 3. `default` 

`default` 같은 패키지 내의 클래스에서만 접근할 수 있습니다. 다른 패키지에서는 접근이 불가능합니다. 상속 관계를 가진다고 하더라도 패키지가 다르면 접근이 불가능합니다.


# 4. `protected`
`protected` 접근 제어자는 같은 패키지 내에서는 접근 가능하며, 다른 패키지의 하위 클래스에서도 접근 가능합니다.