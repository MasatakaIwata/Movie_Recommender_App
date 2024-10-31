from movie_recommender import MovieRecommender

# テスト用のダミーデータを設定
movie_data = [
    {"ID": 1, "Title": "Movie 1", "Genres": "Action", "emotion_label_1": "joy", "emotion_label_2": "trust"},
    {"ID": 2, "Title": "Movie 2", "Genres": "Drama", "emotion_label_1": "sadness", "emotion_label_2": "fear"}
]

# インスタンスを作成し、メソッドを順にテスト
recommender = MovieRecommender(movie_data)
recommender.encode_data()
recommender.compute_cosine_similarity()

# テスト実行
try:
    recommender.add_movie_with_input("Action", "joy", "trust")
    recommendations = recommender.recommend_similar_movies(movie_title='user movie', top_n=5)
    print("Recommendations:", recommendations)
except Exception as e:
    print("Error during testing:", e)
