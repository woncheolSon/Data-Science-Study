# Chapter6. 데이터 로딩, 저장, 파일 형식

### 6.1 텍스트 파일 이용하는 방법 

#### 6.1.4 JSON 데이터

- JSON(JavaScript Object Notation)은 웹브라우저와 다른 애플리케이션이 HTTP 요청으로 데이터를 보낼 때 널리 사용하는 표준 파일 형식 중 하나
- JSON은 널 값인 null과 다른 몇 가지 사소한 주의사항 (리스트의 마지막에 쉼표가 있으면 안 된다던가 하는)을 제외하면 파이썬 코드와 거의 유사하다.
- 기본 자료형은 객체(사전), 배열(리스트), 문자열, 숫자, 불리언, 그리고 널이다.
- 객체의 키는 반드시 문자열이어야 한다.
- json.dumps는 파이썬 객체를 JSON 형태로 변환한다.
- JSON 객체나 객체의 리스트를 DataFrame이나 다른 자료 구조로 어떻게 변환해서 분석을 할 것인지는 개인의 몫이다.
- 편리하게도 JSON 객체의 리스트를 DataFrame 생성자로 넘기로 데이터 필드를 선택할 수 있다.



#### 6.1.5 XML과 HTML: 웹 내용 긁어오기

- 파이썬에는 HTML과 XML 형식의 데이터를 읽고 쓸 수 있는 라이브러리가 무척 많다.

- 그중 lxml은 아주 큰 파일을 빠르게 처리할 수 있는 라이브러리

- HTML 문서의 최상위에서 final 메서드에 XPath(문서 질의 언어)를 넘겨서 해당 엘리먼트를 가져올 수 있다.

  - 이후, 엘리먼트 객체에 대해 get 메서드를 호출하여 URL을 얻는다.
  - 엘리먼트 객체에 대해 text_content 메서드를 사용해 링크 이름을 가져온다.

  ```python
  links = doc.findall('.//a')
  lnk = links[27]
  lnk.get('href') #URL ex)'http://fd.sports.news.naver.com'
  lnk.text_content() #링크이름 ex)'메인 메뉴로 바로가기', 'NAVER', 'SPORTS'
  ```

- 긁어 모든 데이터를 DataFrame으로 변환할때 문자형으로 저장된 숫자 데이터를 자동 형 변환 해주는 pandas의 TextParser 클래스를 사용한다.

  ```python 
  from pandas.io.parsers import TextParser
  
  def parse_options_data(table):
      #code
      return TextParser(data, names=header).get_chunk()
  ```


### 6.4 데이터 베이스와 함께 사용하기

- 사실 대부분의 애플리케이션은 덱스트 파일에서 데이터를 읽어오지 않는다.

- SQL 기반의 관계형 데이터베이스 (Oracle, SQL Server 나 PostgreSQL, MySQL 같은)가 널리 사용되고 있다.

- 또 최근 NoSQL('Not Only SQL')이라 불리는 비 SQL 기반의 데이터베이스도 많이 사용되고 있다.

- SQL에서 데이터를 읽어와서 DataFrame에 저장하는 방법은 꽤나 직관적인데, pandas에서 이 과정을 간결하게 해주는 몇 가지 함수가 있는데 그 중 sqlite3 드라이버를 한 예로 들 수 있다.

  ```python
  import sqlite3
  ```

- 대부분의 파이썬 SQL 드라이버(PyODBC, psycopg2, MySQLdb, pymssql 등)는 테이블에 대해 select 쿼리를 수행하면 튜플 리스트를 반환한다.

- 반환된 튜플 리스트를 DataFrame 생성자에 바로 전달해도 되지만 컬럼의 이름을 지정해주는 것이 편하다.



#### 6.4.1 MongoDB에 데이터 저장하고 불러오기

- NoSQL 데이터베이스는 매우 다양한 형태를 가지고 있다.

- 버클리DB(BerkeleyDB)나 도쿄캐비닛(Tokyo Cabinet) 같은 것은 사전처럼 키-값을 저장하기도 하고,
  또 다른 것은 기본 저장소는 사전 같은 객체를 사용하며 문서 기반으로 데이터를 저장하기도 한다.

- MongoDB 서버를 로컬에 설치하고 공식 드라이버인 pymongo를 사용하여 기본 포트 번호로 연결한다.

  ```python
  import pymongo
  con = pymongo.MongoClient('localhost',port=27017)
  ```

- MongoDB에 저장되는 문서 Document(RDBMS에서의 Tuple)는 데이터베이스 내부의 컬렉션 Collection(RDBMS에서의 Table)에서 찾을 수 있다.

- 하나의 MongoDB 서버는 여러 개의 데이터베이스를 가질 수 있고 각각의 데이터 베이스는 여러 개의 컬렉션을 가질 수 있다.