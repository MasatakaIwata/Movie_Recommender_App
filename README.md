# Movie_Recommender_App

### 애플리케이션 실행 절차

1. 필요한 패키지 설치：

    ```bash
    pip install -r requirements.txt
    ```

2. Flask 서버 시작：

    ```bash
    python app.py
    ```

3. 브라우저에서 `http://127.0.0.1:5000`에 접속하여 애플리케이션을 확인합니다.

### 디렉토리 구성

```
movie_recommender_app/
├── app.py                      # Flask 앱의 진입점
│   ├── 라우팅 설정       # URL과 함수 매핑
│   ├── 요청 처리         # 사용자 요청 접수
│   └── 응답 생성         # JSON 형식으로 결과 반환
│
├── movie_recommender.py        # 영화 추천 로직이 포함된 수업
│   ├── 데이터 인코딩     # One-hot encoding 실행
│   ├── 코사인 유사도 계산     # 영화 간 유사도 계산
│   ├── 영화 추가             # 사용자 입력 데이터 추가
│   └── 추천 기능               # 사용자 입력 데이터 추가
│
├── requirements.txt            # 필요한 Python 패키지 목록
│
├── static/                     # 정적 파일을 저장하는 디렉토리
│   ├── css/
│   │   ├── style.css        # 선택 페이지 스타일
│   │   └── results.css　　　　 # 추천 결과 페이지 스타일
│   └── js/
│       ├── genre.js         # 장르 선택 로직
│       ├── emotion1.js      # 감정1 선택 로직
│       ├── emotion2.js      # 감정2 선택 로직
│       └── results.js       # 추천 결과 로직
│
└── templates/                  # HTML 템플릿을 저장하는 디렉토리
│   ├── results.html              # 사용자가 액세스하는 메인 HTML 파일(추천 결과 출력)
│   ├── genre.html              # 사용자가 장르 페이지에 액세스하는 HTML 파일
│   ├── emotion1.html              # 사용자가 감정 라벨1 페이지에 액세스하는 HTML 파일
│   └── emotion2.html              # 사용자가 감정 라벨2 페이지에 액세스하는 HTML 파일
│
└── data/                  # csv 파일을 저장하는 디렉토리
    └── movie_data_use.csv                  # 학습할 때 사용하는 csv 파일
```
