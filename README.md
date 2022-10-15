### 프로젝트 소개
블록체인 전문 포털인 [코인고스트](https://www.coinghost.com/)의 게시판인 "블로고"의 리스트, 상세 페이지와 회원가입 페이지를 모바일 UI 및 API 연동 진행한 프로젝트. 

<hr>

### 프로젝트 작업 환경 
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React](https://img.shields.io/badge/swr-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)


### 프로젝트 실행 방법

```bash
npm run dev
# or
yarn dev
```
프로젝트가 실행되면 브라우저에서 `http://localhost:3000`으로 접속 
아래 테스트 계정으로 회원가입:
```
휴대번호: 1012341234
인증번호: 333333
```

### 프로젝트 구현 사항

#### 1. 회원가입 페이지 구현 

https://user-images.githubusercontent.com/75746836/195978718-b954d2b7-d56c-4367-aace-b589c80961c8.mov

   * [x] Zeplin을 보고 디자인 및 기능 개발 
   * [x] 동의 화면 - 필수 항목 다 체크될 시 다음 항목으로 이동
   * [x] "가입하기" 클릭 시 각 폼에 error message 없이 `console.log`에 data가 찍히도록 구현 
   * [x] 가입하기 클릭 시 `input` tag에 빈 값이나 알맞지 않는 형식일 경우 error 문구 띄어주는 기능 구현 
   * [x] 인증번호 받기 API 이용해서 인증번호 받아서 인증번호 인증까지 기능 구현
      * [x] 휴대폰 번호는 82-1012341234 으로 입력 
      * [x] Error handling
      * [x] 인증 완료시 휴대폰 인증하기 번트 `disabled` 처리 
   
   * [x] 인증번호 받기 `POST` /api/register 
        ```
        request
        body = {
          phone: "82-1012341234"
        }
        response
        {
          message: 인증번호
        }
        ```
   * [x] 인증번호 인증 `POST` /api/auth
        ```
        request
        body = {
          auth: 인증번호
        }
        response
        {
          data: true
        }
        ```

#### 2. 리스트 페이지와 상세 페이지 디자인을 보고 개발 

https://user-images.githubusercontent.com/75746836/195979693-44e52023-039e-4c37-826d-0797e450c555.mov

  * [x] data fetch는 SWR library 사용해서 리스트 및 상세 API 호출
  * [x] 전체글, 인기글 필터링 기능
  * [x] 리스트 페이지의 경우 SWR Infinite Scroll 사용
  * [x] 상세 페이지는 `getStaticProps`, `getStaticPath` 이용해서 pre-rendering
  * [x] List API `GET` `https://api.dev.coinghost.com/blogs`
     ```
     params = {
       orderBy: "likes",  // 인기글
       limit: "10",
       page: "1"
     }
     ```
  * [x] Detail API `GET` `https://api.dev.coinghost.com/blogs/${id}`


    
