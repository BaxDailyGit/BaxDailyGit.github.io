---
layout: single
published: true
title:  "[네트워크]면접 단골질문 정리"
categories: network
date: 2023-09-06 16:16:43
toc: true
toc_sticky: true
tag:   
  - API
  - REST API
  - HTTP 통신
  - HTTP 메소드
  - 인터페이스
  - JSON 형식
  - 프로토콜
  - URL
  - GET 메소드
  - POST 메소드
---

## 면접에서 단골질문 정리
<br>

### 1. 한문장 정리

#### 😶 API를 한 문장으로 설명한다면??
<p>
API는 다른 프로그램끼리 정보를 주고받을 수 있게 만든 '연결 통로'입니다.
</p>


#### 😐 rest API를 한 문장으로 설명한다면??
<p>
rest API는 웹에서 정보를 주고받을 때 편하게 사용하는 방법 중 하나로, 웹 사이트처럼 브라우저를 통하지 않고 데이터를 요청하고 받을 수 있습니다.
</p>

#### 🤨 HTTP 통신을 한 문장으로 설명한다면??
<p>
HTTP 통신은 웹 서버와 클라이언트 간에 데이터를 주고받는 프로토콜로, 요청(Request)과 응답(Response) 메시지로 구성됩니다.
</p>

#### 🤔 HTTP 메소드 GET과 POST의 차이에 대해서 한 문장으로 설명한다면??
<p>
GET은 정보를 검색하고 조회할 때 사용되며, URL에 정보를 포함하거 서버의 데이터를 변경하지 않는 반면, POST는 데이터를 제출하고 서버의 데이터를 변경하기 위해 사용되며 요청 본문에 정보를 담고 있습니다.
</p>






<br>

----------------
<br>







### 2. API란?

<p>
API는 응용 프로그램에서 사용할 수 있도록, 운영체제나 프로그래밍 언어에서 제공하는 기능을 제어할 수 있게 해주는 인터페이스입니다. 사람과 사물을 연결하는 것처럼 응용 프로그램 간에도 특정 형식으로 요청과 응답을 할 수 있도록 연결하는 역할을 합니다.
</p>
<p>
예를 들어 공용 바이크를 이용할 수 있는 앱이나 미용실 예약하기 위한 앱이 API를 활용한 예입니다. 카카오,네이버,구글 등에서 제공하는 API를 자신의 애플리케이션에 적용해서 지도와 관련된 정보하는 원리로 설명할 수 있습니다. 이러한 방식으로 다양한 경로를 통해 API를 사용하여 서비스를 개발할 수 있습니다. 
</p>
<p>
+공공데이터 포털에서 국가가 제공하는 다양한 API를 활용하는 관련글을 업로드할 예정입니다.
</p>








<br>

----------------
<br>







### 3. rest API란?

<p>
rest API는 많은 개발자들이 활용하고 있는 API 중 하나입니다. rest API는 인터넷 식별자 URL과 HTTP를 기반으로 하며, 브라우저 간 호환성이 좋은 JSON 형식을 주로 사용합니다. 
</p>
<p>
rest API는 문서, 그림, 데이터 등의 자원을 이름으로 구분해서 해당 자원에 대한 상태와 정보를 주고 받는 것을 의미하며, HTTP 메소드를 활용하여 해당 자원에 대한 CRUD(Create, Read, Update, Delete)를 적용하는 것을 의미합니다.
</p>
<p>
rest API의 중요한 특성 중 하나는 각 요청이 어떤 정보나 동작을 위한 것인지 그 모습 자체만으로 추론이 가능하다는 점입니다. 
</p>






<br>

----------------
<br>




### 3. HTTP 프로토콜이란?

* #### HTTP프로토콜

<p>
우리가 인터넷에서 검색을 하거나 서비스를 이용하기 위해서 주소창에 웹사이트 주소를 입력하고 해당 웹페이지를 불러올때 HTTP(Hypertext Transfer Protocol)라는 프로토콜을 사용합니다. 이 프로토콜은 인터넷상의 커뮤니케이션에 사용되는 형식들 중 하나입니다. 
</p>


* #### HTTP는 어떻게 동작할까?


인터넷으로 주문한 배송물이 왔을때를 예로 들어보겠습니다. 배송물을 보면 어떤게 수령자 이름이고 어떤게 수령 주소, 송장 번호, 발송자 주소, 배송 날짜 등등 인지 알수 있습니다. 이런 정보를 통해서 우리집으로 배송이 잘 온것을 알수 있습니다.  
마찬가지로 우리가 어떤 특정 웹페이지에 들어가기 위해서는 주소 정보가 필요합니다.






<p>
예를 들어, 구글에 들어가려면 브라우저에 "www.google.com"이라는 웹사이트 주소를 입력합니다. 이 주소는 구글 서버의 위치를 나타내며, 이때 사용되는 프로토콜이 HTTP입니다.
</p>






<p>
브라우저는 이 웹사이트 주소를 HTTP 형식의 요청 메시지로 변환하고, 이 메시지를 구글 서버로 보냅니다. 구글 서버는 이 요청 메시지를 받아들이고, HTTP 프로토콜을 따라 웹페이지를 작성하여 다시 브라우저로 응답합니다.
응답은 마찬가지로 HTTP 형식으로 돌아오며, 브라우저는 이를 해독하여 우리가 잘 아는 구글 화면을 표시합니다. 
</p>


<p>
즉, 정리하자면 HTTP는 인터넷 상에서 정보를 주고 받는 데 사용되는 프로토콜 중 하나로, 주소창에 웹사이트 주소를 입력하여 웹페이지를 요청하고, 서버는 이를 HTTP 형식으로 응답함으로써 웹사이트를 표시합니다. 
</p>





<br>

----------------
<br>









### 4. HTTP 메소드 GET과 POST의 차이



* #### GET 메소드

  * 웹에서 가장 많이 사용되는 메소드 중 하나입니다.
  * 주로 정보를 검색하거나 조회할 때 사용합니다.
  * URL에 정보가 포함되어 있습니다.
  * 일반적으로 문서를 요청하거나 현재 페이지의 데이터를 가져오는 데 활용됩니다.
  * 요청이 캐시되어 저장될 수 있으며, 서버의 데이터를 변경하지 않습니다.
  * 동일한 GET 요청을 여러 번 반복해도 문제가 없어야 합니다.




* #### POST 메소드

  * 리소스를 서버로 전송하거나 업데이트할 때 주로 사용됩니다.
  * 요청 본문에 정보를 담고 있습니다.
  * 주로 데이터를 제출하고, 서버의 데이터를 변경하는 데 활용됩니다.
  * 요청은 거의 캐시되지 않습니다. (서버에서 데이터를 업데이트하고 있기 때문입니다.)
  * 최대 길이 제한이 없습니다.  


+ 아래글을 참고해서 각 메서드를 써서 api를 호출해봅시다.  

[<img src="https://github.com/BaxDailyGit/BaxDailyGit.github.io/assets/99312529/56b3b005-0add-427c-92e4-1e32d21e9850"  width="600" height="140"/>](https://baxdailygit.github.io/network/postman/)


<br>


----------------
<br>




#### 관련 포스트

|번호	  |제목|
|---|---|
|1|[[네트워크]Postman으로 원하는 정보를 얻을 수 있는 api](https://baxdailygit.github.io/network/Interview_Summary/)|
|2|[[네트워크]Postman으로 원하는 정보를 얻을 수 있는 api 호출해보자](https://baxdailygit.github.io/network/postman/)|
