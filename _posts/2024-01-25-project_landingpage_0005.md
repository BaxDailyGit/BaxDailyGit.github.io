---
layout: single
published: true
title:  "[포트폴리오 랜딩 페이지] html작성"
categories: landingpage
date: 2024-01-25 17:14:18
toc: true
toc_sticky: true
tag:   
  - 프로젝트
  - 랜딩 페이지
  - 오르미
  - 이스트소프트

---

## 포트폴리오 랜딩 페이지 html작성

먼저 index.html에서 html코드를 작성합니다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>
```



## 웹페이지 구조 설계
<header>, <nav>, <main>, <footer> 등의 시맨틱 구조 설정

```html
<body>
    <header>
        <nav></nav>
    </header>
    <main>
        <section></section><!-- welcome 섹션 -->
        <section></section><!-- about 섹션 -->
        <section></section><!-- projects 섹션 -->
        <section></section><!-- map 섹션 -->
        <section></section><!-- email 섹션 -->
    </main>
    <footer></footer>
</body>
```



## 콘텐츠 구성
<section>, <article>, <figure>, <figcaption> 등의 요소 활용
텍스트, 이미지, 버튼 등의 콘텐츠 삽입

## 하이퍼링크 및 외부 링크 설정
<a> 태그를 활용하여 내부 및 외부 페이지로의 링크 설정

## 이미지 삽입
<img> 태그를 활용하여 미디어 콘텐츠 삽입

## 폼 요소 구성
<form>, <input>, <textarea>, <button> 등의 태그를 활용하여 폼 구성
폼 요소의 유효성 검사 및 데이터 전송 설정