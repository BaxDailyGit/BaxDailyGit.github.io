---
layout: single
published: true
title:  "[DB]데이터베이스 키워드 정리"
categories: DataBase
date: 2023-09-23 23:22:00
toc: true
toc_sticky: true
tag:   
  - 데이터베이스 (Database)
  - 데이터베이스 관리 시스템 (DataBase Management System)
  - 관계형 데이터베이스 (Relational Database)
  - SQL 쿼리 (SQL Query)
---

# 데이터베이스 키워드 정리

## 데이터베이스(Database, DB)란?

데이터베이스는 정보를 효율적으로 관리하기 위한 체계화된 데이터의 집합을 말합니다. 시스템에서 구조화된 형태로 저장되며, 데이터의 저장, 검색, 갱신, 삭제 등의 작업을 하며 데이터의 관리와 활용을 용이하게 합니다.

## 데이터베이스의 필요성

데이터베이스의 필요성은 정보를 중앙 집중적으로 저장하고 관리하여 데이터의 일관성과 정확성을 유지하며, 데이터에 대한 공유와 보안을 제공하기 위함입니다. 또한 대용량 데이터 처리, 실시간 접근, 병렬 처리 등의 요구사항을 충족시켜줍니다.

## 데이터베이스의 특징

* 통합성: 여러 응용 시스템에서 데이터를 중복으로 저장하지 않고 하나의 데이터베이스에 통합하여 관리합니다.
* 저장성: 데이터베이스는 장기간에 걸쳐 데이터를 안정적으로 저장할 수 있어야 합니다.
* 운영성: 데이터베이스는 여러 사용자가 동시에 접근하고 데이터를 처리할 수 있어야 합니다.
* 공유성: 데이터베이스는 여러 사용자나 응용 프로그램 간에 데이터를 공유할 수 있어야 합니다.

## 데이터베이스의 기능 특징

* 실시간 접근성: 데이터베이스는 언제든지 필요한 데이터에 실시간으로 접근할 수 있어야 합니다.
* 계속적인 변화: 데이터베이스는 새로운 데이터를 추가하거나 기존 데이터를 수정, 삭제할 수 있어야 합니다.
* 동시 공용: 여러 사용자가 동시에 데이터베이스에 접근하여 작업할 수 있어야 합니다.
* 내용에 의한 참조: 데이터베이스는 데이터의 내용에 따라 검색할 수 있어야 합니다.

## 데이터베이스 언어

* **DDL** (Data Definition Language): 데이터베이스 구조를 **정의**하거나 수정하는 명령어로, CREATE, ALTER, DROP 등이 포함됩니다.
* **DML** (Data Manipulation Language): 데이터를 검색하거나 **조작**하는 명령어로, SELECT, INSERT, UPDATE, DELETE 등이 포함됩니다.
* **DCL** (Data Control Language): 데이터베이스에 대한 접근 권한을 **제어**하는 명령어로, GRANT, REVOKE 등이 포함됩니다.

## 스키마

* 외부 스키마: 사용자나 응용 프로그램이 접근하는 데이터베이스의 논리 구조를 정의.
* 개념 스키마: 데이터베이스의 전체 구조와 관계를 정의.
* 내부 스키마: 데이터베이스의 물리적 구조를 정의.

## 테이블

* Relation: 테이블을 의미하며, 데이터의 구조화된 형태를 나타냅니다.
* Tuple: 테이블의 각 행을 의미하며, 레코드라고도 합니다.
* Attribute: 테이블의 열을 의미하며, 필드 또는 속성이라고도 합니다.

### 테이블 생성 SQL 문법

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....  
);
```

## 데이터 조작어 (DML) 종류

* SELECT - 검색
```sql
sELECT * FROM usertable;   -- usertable에서 모든 데이터 출력하기
SELECT name, age FROM usertable;   -- usertable에서 name, age 컬럼 출력하기
SELECT DISTINCT name FROM usertable;    -- 데이터 중복제거시 DISTINCT 사용
SELECT * FROM usertable ORDER BY age;   -- age를 기준으로 오름차순 정렬
SELECT * FROM usertable WHERE name = 'jane';   -- name이 jane인 데이터 출력
SELECT * FROM usertable WHERE age < 20;   -- age가 20미만인 데이터 출력
```
* INSERT - 등록
```sql
INSERT INTO usertable(name, age) VALUES ('james', 20) ;   -- usertable에 name은 james, age는 20인 데이터 삽입
```
* UPDATE - 수정
```sql
UPDATE usertable SET age=30 WHERE name='james';   -- usertable에 james의 age를 30으로 변경
```
* DELETE - 삭제
```sql
DELETE FROM usertable WHERE name='james';   -- usertable에 name이 james인 데이터를 삭제
```

### SELECT 실행 순서

FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY

## DBMS (Database Management System)

DBMS는 데이터베이스를 관리하는 소프트웨어로, 데이터의 저장, 검색, 갱신, 삭제와 같은 작업을 지원하며 데이터의 무결성과 보안을 유지합니다.

## RDBMS(관계형 데이터베이스) 종류

관계형 데이터베이스는 테이블 간의 관계를 통해 데이터를 구조화하는 데이터베이스 시스템입니다. 주요 관계형 데이터베이스 관리 시스템에는 Oracle, MySQL, PostgreSQL, SQL Server 등이 있습니다.

## 관계형 데이터베이스 설계

관계형 데이터베이스 설계는 데이터 테이블을 정의하고 관계를 설정하여 무결성을 유지합니다.

## 관계의 종류

* 1:1 관계: 한 엔터티와 다른 엔터티 간에 일대일의 관계
* 1:N 관계: 한 엔터티와 다른 엔터티 간에 일대다의 관계
* N:M 관계: 한 엔터티와 다른 엔터티 간에 다대다의 관계
* Self-referencing 관계: 동일한 엔터티 내에서 자기 자신과의 관계

## Key

* 후보키: 튜플을 고유하게 식별할 수 있는 하나 또는 여러 개의 속성의 조합.
* 기본키: 후보키 중에서 선택한 주요 식별키로, 중복된 값을 가질 수 없습니다.
* 슈퍼키: 후보키나 기본키로 사용할 수 있는 속성들의 조합.
* 외래키: 다른 테이블의 기본키를 참조하는 속성으로, 두 테이블 간의 관계를 정의합니다.

`이미지 (집합) 추가하기`

## 관계 데이터 모델의 제약조건

관계 데이터 모델에서는 개체 무결성, 참조 무결성, 도메인 무결성 등의 제약 조건을 준수하여 데이터의 무결성을 유지합니다.

## 집합연산 관련 SQL 내장함수

* GROUP BY: 특정 열을 기준으로 그룹화하여 집계 함수를 적용하는데 사용됩니다.
* HAVING: GROUP BY와 함께 사용되며, 그룹 조건을 설정할 때 사용됩니다.
* COUNT(): 특정 열의 레코드 개수를 세는 함수.
* SUM(): 특정 열의 합을 계산하는 함수.
* AVG(): 특정 열의 평균을 계산하는 함수.
* MAX(): 특정 열에서 최댓값을 찾는 함수.
* MIN(): 특정 열에서 최솟값을 찾는 함수.

