---
layout: single
published: true
title:  "[DB]프로그래머스 SELECT 20문제 풀이 모음"
categories: Database
date: 2023-10-15 02:19:00
toc: true
toc_sticky: true
tag:   
  - 데이터베이스
  - Database
  - 프로그래머스
  - 인기있는 아이스크림
  - 강원도에 위치한 생산공장 목록 출력하기
  - 서울에 위치한 식당 목록 출력하기
  - 조건에 부합하는 중고거래 댓글 조회하기
---

## 프로그래머스 SELECT 20문제 풀이 모음

<br>

## 1. 인기있는 아이스크림

```sql
SELECT FLAVOR 
FROM FIRST_HALF 
ORDER BY TOTAL_ORDER DESC, SHIPMENT_ID
```

<br>


## 2. 강원도에 위치한 생산공장 목록 출력하기

```sql
SELECT FACTORY_ID, FACTORY_NAME, ADDRESS
FROM FOOD_FACTORY
WHERE ADDRESS LIKE '%강원도%'
ORDER BY FACTORY_ID
```

<br>


## 3. 서울에 위치한 식당 목록 출력하기

```sql
3번은 조금 어려워서 추후에 작성하겠습니다.
```

<br>



## 4. 조건에 부합하는 중고거래 댓글 조회하기

```sql
SELECT B.TITLE, 
       B.BOARD_ID,
       R.REPLY_ID,
       R.WRITER_ID,
       R.CONTENTS,
       DATE_FORMAT(R.CREATED_DATE, '%Y-%m-%d') AS CRAETED_DATE
FROM USED_GOODS_BOARD AS B
    INNER JOIN USED_GOODS_REPLY AS R
    ON B.BOARD_ID = R.BOARD_ID
WHERE B.CREATED_DATE BETWEEN '2022-10-01' and '2022-10-31'
ORDER BY R.CREATED_DATE, B.TITLE
```

<br>

추가 예정