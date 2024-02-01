---
layout: single
published: true
title:  "[아주파킹] 제작 시작"
categories: ajouparking
date: 2023-11-26 16:12:00
toc: true
toc_sticky: true
tag:   
  - 아주파킹
  - AjouParking

---

## AjouParking - 주차장 정보 제공 서비스


### 1. 배경

대학교 "데이터베이스" 수업을 듣는데 팀프로젝트 과제가 주어져 프로젝트를 진행하면서 과정과 배운점 및 느낀점들을 기록하고자 합니다.  
개발경험이 없어 어색한 부분이 많겠지만 얻는 장점도 있을거라 기대합니다.

----------------

### 2. 팀원들과의 첫만남

조교님께서 임의로 팀을 정해주어 팀원들끼리 메일을 주고 받고 처음 대면하였습니다.  
정보보안학과, 미디어학과, 물리학과 전공을 가진 4명으로 구성되었고, 한 명은 외국인입니다. 소프트웨어학과 수업에서 주 전공생이 한명도 없는게 신기했습니다.  

![KakaoTalk_20231126_173801747](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/98a1dfff-b41c-4e5e-9311-48c450e8f068){: width="50%" height="50%" .align-center}

<center>카톡 첫 만남</center>

----------------

### 3. 주제 선정

상용 데이터베이스를 이용한 데이터베이스 응용 프로그램 제작이 미션으로 주어졌습니다. 팀원 모두 프로젝트 개발 경험이 없기 때문에 비교적 구현 가능한 주제를 선정하고자 하였습니다.  여러 아이디어를 의논해본 결과 주차장 정보 관련 서비스에 의견이 모였고 마침 공공데이터 포털에 우리가 원하는 데이터가 있음을 확인하였습니다.  
최종적으로 저희는 "AjouParking"이라는 이름으로 **주차장 정보 제공 시스템**을 주제로 선정하였습니다.

----------------


여기서부터는 발표한 ppt 이미지를 활용하여 써보겠습니다.  
보시다보면 정말 처음 개발 해보는구나를 느끼실수 있을것 같습니다. ㅠㅠ  

부족한 지식으로 작성해보았고 개발을 하면서 차차 수정해나갈 예정입니다.  

### 4. 프로젝트 개요 및 목표 설정

![슬라이드3](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/9476dd9a-238f-450c-87ec-2b9ed384be84)
![슬라이드4](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/e60261d8-dddd-493a-a0d1-2fbfc57e965d)
![슬라이드5](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/e5c75f68-db2c-4d32-993b-88216f46d24a)
![슬라이드6](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/3eb90d4b-1257-4150-8912-ac4379581de7)
![슬라이드7](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/92a101fd-8080-4c44-8059-50e0e06ed328)

### 5. 관련 sw조사

![슬라이드8](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/e789c928-7726-4a9a-9814-5d58b2b054f0)
![슬라이드9](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/5369eb61-80a1-43f8-9182-d78fbf761776)
![슬라이드10](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/b417f3ef-6bcb-4777-b38f-79c26480aa3f)

### 6. db스키마 디자인 

프로젝트를 계획하면서 항상 들었던 고민은 "이렇게 하는게 맞는걸까?" 라는 생각입니다. 그중에서 db스키마 디자인에서 고민이 많았던것 같습니다.

예를들어 테이블을 구성하는 부분에서 최근 조회한 주차장은 굳이 테이블로 구성할 필요가 있을까? 라던지 정규화 비정규화는 어느타이밍에 해야하는지 등등이 있던것 같습니다.

![슬라이드11](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/a948bc24-7127-48ce-a6a5-f01f44a55aae)
![슬라이드12](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/75948e8e-d943-4c9a-91d4-f2e17d52b442)
![슬라이드13](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/f2948242-97d1-4bd6-b624-6f06e7f1b07f)
![슬라이드14](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/56d8b2f3-8e02-442c-92e6-1da3da1d814d)
![슬라이드15](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/70ef910d-03f8-4fcd-bab4-50a331ebd9a9)

리액트를 사용한다고 적었지만 바닐라JS로 하려고 합니다. (수정예정)

![슬라이드16](https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/6c1ef927-75bd-4647-977c-55506c1fb287)

### 마치며

기획은 했지만 구현까지 잘 해낼수 있을까 잘 모르겠습니다. 어떤 페이지를 만들어야할지 어떤 api를 만들어야하는지 정하지 않았지만 열심히 해보고자 합니다.

추가로 팀에는 저를 포함한 백엔드 지망생이 두명이었지만 프론트는 아무도 없습니다. 이런 상황에서 어느정도 프론트를 할수 있어야겠구나를 느낍니다.

