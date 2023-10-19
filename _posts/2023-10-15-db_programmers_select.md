---
layout: single
published: true
title:  "[DB]프로그래머스 SELECT 20문제 풀이 모음"
categories: Database
date: 2023-10-19 21:04:00
toc: true
toc_sticky: true
tag:   
  - 데이터베이스
  - Database
  - sql
  - 프로그래머스
  - 인기있는 아이스크림
  - 평균 일일 대여 요금 구하기
  - 12세 이하인 여자 환자 목록 출력하기
  - 조건에 맞는 도서 리스트 출력하기
  - 과일로 만든 아이스크림 고르기
  - 흉부외과 또는 일반외과 의사 목록 출력하기
  - 조건에 부합하는 중고거래 댓글 조회하기
  - 모든 레코드 조회하기
  - 역순 정렬하기
  - 아픈 동물 찾기
  - 어린 동물 찾기
  - 동물의 아이디와 이름
  - 여러 기준으로 정렬하기
  - 상위 n개 레코드
  - 조건에 맞는 회원수 구하기
  - 3월에 태어난 여성 회원 목록 출력하기
---

## 프로그래머스 SELECT 20문제 풀이 모음

<br>

## level 1 

### 1. 인기있는 아이스크림

```sql
SELECT FLAVOR 
FROM FIRST_HALF 
ORDER BY TOTAL_ORDER DESC, SHIPMENT_ID
```

<br>


### 2. 강원도에 위치한 생산공장 목록 출력하기

```sql
SELECT FACTORY_ID, FACTORY_NAME, ADDRESS
FROM FOOD_FACTORY
WHERE ADDRESS LIKE '%강원도%'
ORDER BY FACTORY_ID
```



<br>

### 3. 평균 일일 대여 요금 구하기

```sql
SELECT ROUND(AVG(DAILY_FEE),0) AS AVERAGE_FEE
FROM CAR_RENTAL_COMPANY_CAR
WHERE CAR_TYPE = 'SUV'
```

<br>
배운점 : 반올림을 하려면 ROUND(값,반올림할 자릿수)을 사용하면 된다.

### 4. 12세 이하인 여자 환자 목록 출력하기

```sql
SELECT PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(TLNO, 'NONE') AS TLNO
FROM PATIENT
WHERE (GEND_CD = 'W' AND AGE <= 12)
ORDER BY AGE DESC ,PT_NAME 
```

배운점 : 전화번호가 없는 경우, 'NONE'으로 출력은 IFNULL(TLNO, 'NONE')코드를 사용하면 된다.  
  
만약 조건이 두개 이상이라면 CASE를 사용하면 된다.


<br>



### 5. 조건에 맞는 도서 리스트 출력하기

```sql
SELECT BOOK_ID, DATE_FORMAT(PUBLISHED_DATE, '%Y-%m-%d') as PUBLISHED_DATE
FROM BOOK
WHERE PUBLISHED_DATE BETWEEN '2021-01-01' AND '2021-12-31'
AND CATEGORY = '인문'
ORDER BY PUBLISHED_DATE ASC;
```
배운점 : 날짜 출력 형식을 수정하려면 DATE_FORMAT(값, '형식')을 사용하면 된다. 이때 대문자 Y는 2021이 다 나오고 소문자 y는 21만 나온다.


<br>



### 6. 과일로 만든 아이스크림 고르기

```sql
SELECT FLAVOR
FROM FIRST_HALF F
WHERE TOTAL_ORDER > 3000 
AND F.FLAVOR IN (
    SELECT I.FLAVOR
    FROM ICECREAM_INFO I
    WHERE INGREDIENT_TYPE = 'fruit_based'
)
ORDER BY TOTAL_ORDER DESC
```
nested subquery를 사용해서 짜보았다.  
그런데 inner join을 사용해도 될것 같아서 아래와 같이 다시 짜보았다.

```sql
SELECT F.FLAVOR
FROM FIRST_HALF F JOIN ICECREAM_INFO I
ON F.FLAVOR = I.FLAVOR
WHERE F.TOTAL_ORDER > 3000 AND I.INGREDIENT_TYPE = 'fruit_based'
ORDER BY F.TOTAL_ORDER DESC
```

배운점 :  
subquery에는 종류가 scalar, inline view, nested(in, exists, any, all)이 있다.
join에는 종류가 inner, natural, full outer, left outer, right outer, cross join 이 있다.   
나중에 정리해봐야겠다.   




<br>





### 7. 흉부외과 또는 일반외과 의사 목록 출력하기 

```sql
SELECT DR_NAME, DR_ID, MCDP_CD, DATE_FORMAT(HIRE_YMD,'%Y-%m-%d') AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD = 'CS' 
OR MCDP_CD = 'GS' 
ORDER BY HIRE_YMD DESC, DR_NAME ASC;
```

<br>

### 8. 조건에 부합하는 중고거래 댓글 조회하기

```sql
SELECT B.TITLE, 
       B.BOARD_ID, 
       R.REPLY_ID, 
       R.WRITER_ID, 
       R.CONTENTS, 
       DATE_FORMAT(R.CREATED_DATE,'%Y-%m-%d') AS CREATED_DATE
FROM USED_GOODS_BOARD B 
JOIN USED_GOODS_REPLY R 
ON  B.BOARD_ID = R.BOARD_ID
WHERE B.CREATED_DATE BETWEEN '2022-10-01' AND '2022-10-31'
ORDER BY R.CREATED_DATE ASC, B.TITLE ASC
```

<br>


### 9. 모든 레코드 조회하기

```sql
SELECT *
FROM ANIMAL_INS
ORDER BY ANIMAL_ID ASC

```

<br>



### 10. 역순 정렬하기

```sql
SELECT NAME, DATETIME
FROM ANIMAL_INS
ORDER BY ANIMAL_ID DESC

```

<br>



### 11. 아픈 동물 찾기

```sql
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION = 'Sick'
ORDER BY ANIMAL_ID
```

<br>





### 12. 어린 동물 찾기

```sql
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION != 'Aged'
ORDER BY ANIMAL_ID
```
배운점 : '!=' 연산자 대신 NOT IN을 사용해도 된다. 이때 NOT IN ('Aged', 'Sick', 'Normal')과 같이 여러개를 포함되지 않는 조건으로 사용 가능하다.

<br>





### 13. 동물의 아이디와 이름

```sql
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
```

<br>





### 14. 여러 기준으로 정렬하기

```sql
SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME ASC, DATETIME DESC
```

<br>





### 15. 상위 n개 레코드

```sql
SELECT NAME
FROM ANIMAL_INS
WHERE DATETIME IN(
    SELECT MIN(DATETIME)
    FROM ANIMAL_INS
)
```

<br>





### 16. 조건에 맞는 회원수 구하기

```sql
SELECT COUNT(*) 
FROM USER_INFO
WHERE (JOINED BETWEEN '2021-01-01' AND '2021-12-31')
AND AGE >= 20
AND AGE <= 29
```

배운점 : 데이터 개수를 구하려면 COUNT(속성)을 사용하면 된다.
<br>


## level 2


### 17. 3월에 태어난 여성 회원 목록 출력하기

```sql
SELECT MEMBER_ID, 
       MEMBER_NAME, 
       GENDER, 
       DATE_FORMAT(DATE_OF_BIRTH, '%Y-%m-%d') AS DATE_OF_BIRTH
FROM MEMBER_PROFILE
WHERE MONTH(DATE_OF_BIRTH) = '03'
AND TLNO IS NOT NULL
AND GENDER = 'W'
ORDER BY MEMBER_ID ASC
```

배운점 : 날짜에서 '월'만 가져오고 싶다면 MONTH()을 사용하면 된다.

<br>





### 18. 재구매가 일어난 상품과 회원 리스트 구하기

```sql
SELECT USER_ID, PRODUCT_ID 
FROM ONLINE_SALE
GROUP BY USER_ID, PRODUCT_ID
HAVING COUNT(*) >1 -- 여기서 COUNT(속성명)이 아닌 COUNT(*)이유는 NULL 값을 포함한 개수까지 세기 때문이다.
ORDER BY USER_ID ASC, PRODUCT_ID DESC
```
배운점 : 중복 데이터를 가져오고 싶으면 GROUP BY, HAVING을 사용하면 되는데  
이때 동일한 데이터 중에 동일한 다른 속성을 가진 데이터를 가져오고 싶으면 'GROUP BY 속성, 속성' 을 하면 된다.  
또한 COUNT(속성명)이 아닌 COUNT(*)이유는 NULL 값을 포함한 개수까지 세기 때문이다.

<br>


## level 4


### 19. 

```sql

```

<br>





### 20. 

```sql

```

<br>

