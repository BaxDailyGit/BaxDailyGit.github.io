---
layout: single
published: true
title:  "[포트폴리오 랜딩 페이지] 레이아웃 계획"
categories: landingpage
date: 2024-01-16 18:46:48
toc: true
toc_sticky: true
tag:   
  - 프로젝트
  - 랜딩 페이지
  - 오르미
  - 이스트소프트

---

## 1. 프로젝트 초기화

### 1.1 Git 저장소 생성

프로젝트의 버전 관리를 위해 Git 저장소를 생성하고 초기 커밋을 추가하여 기본 프로젝트 설정을 저장합니다.

### 1.2 프로젝트 구조 생성 및 파일 설정

#### 전반적인 디렉토리 구조 정의

과거에 진행했던 프로젝트에서는 자바스크립트 코드가 천줄이 넘어가서 코드를 찾기도 어렵고 스크롤 때문에 고생했던 기억이 납니다.

이를 방지하고자 이번 프로젝트는 전반적인 디렉토리 구조를 정의하고 진행합니다. 저는 크게 assets, components, layouts, pages로 나누었습니다. 

![image](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/4b48821d-e644-4ed1-a171-90123f227cd4)
{: width="70%" height="70%"}


#### 초기 스타일 표준화

reset.css 파일을 도입하여 초기 스타일을 표준화합니다. 
```html
<link rel="stylesheet" type="text/css" href="css/reset.css">
```

## 2. 디자인 및 레이아웃 계획

### 2.1 롤모델 UI 요소 분석

아래는 롤모델로 삼을 페이지입니다.  

![PC](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/18d94135-51b3-4170-8880-a211b5031377)

이제 이미지를 보고 필요한 ui요소와 디자인을 분석하고 내 프로젝트에 어떻게 적용하지 생각해보겠습니다.  
참고로 최대한 Semantic하게 진행하고자 합니다.

* #### header

![image](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/981602fb-85ed-489e-aeeb-dff59e8d406f)

위 영역을 전부 header로 보고 진행하면 될것 같습니다. 제일 상단에 nav를 ,아래에는 h1태그와 p태그, 버튼, 이미지로 구성되는것 같습니다. 

#### nav 

header의 제일 상단을 보면 Home, About, Support, Download가 있습니다. 

저같은 경우에는 포트폴리오 랜딩페이지를 제작하기 때문에 Home, About, Projects, Download로 진행하고 페이지를 분할하지 않고 Home에서 About, Projects 아티클을 넣고 클릭시 동일페이지 해당 아티클로 이동하도록 해야겠습니다. Download는 단순히 Home 페이지를 출력하도록 해야겠습니다.

또한 스크롤을 내리면 4개의 영역이 유지되도록 하면 좋을것 같습니다. 

* #### main

![image](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/10df4025-6607-4a0f-9793-3ca741648975)

about아티클로 하면 좋을것 같습니다. 저를 표현하는 이미지 하나와 p태그로 이루면 될것입니다. 또한 flex 속성을 넣으면 되겠네요.

![image](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/f18e277b-1c26-4b49-b3d6-9e48ea0cd937)

여기는 projects아티클로 하면 좋을것 같습니다. 전반적인 설명 p태그와 제가 진행했던 프로젝트 article 태그를 넣고 css는 마우스 오버시 해당 git 레포지토리로 이동이 뜨는 애니메이션을 넣으면 더 좋을것 같습니다. 마찬가지로 article과 이미지들은 flex 속성을 넣구요.

현재까지 진행한 프로젝트가 별로 없기 때문에 article 밑의 나머지 이미지들은 api를 사용해서 꾸며볼 생각입니다.

![image](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/63fdeb4a-7cef-4f50-b80b-e7b2110bd4ea)

여기는 map아티클로 하면 좋을것 같습니다.
지도는 카카오api를 사용하며 추가기능은 추후에 생각해 보겠습니다.

![image](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/cc612e65-ea98-4a75-b0a1-5c0e2f2d4f72)

여기는 email 아티클로 하면 좋을것 같습니다. 이미지와 다르게 입력란을 지우고 저의 이메일을 p태그로 넣으며 버튼을 누르면 이메일을 보내는 새창이 뜨도록 해야겠습니다.

* #### footer

![image](https://github.com/BaxDailyGit/BaxDailyGit/assets/99312529/44047ea8-71e4-48ad-b8de-a651a950b989)

footer에는 단순히 이미지로고와 저의 블로그, 깃허브와 연결된 버튼을 넣으면 될것 같습니다.


**이제 계획은 마치고 다음 post부터 개발을 본격적으로 해보겠습니다!**

