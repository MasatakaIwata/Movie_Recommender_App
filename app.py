from flask import Flask, render_template, request, jsonify, redirect, url_for
from movie_recommender import MovieRecommender
from flask_cors import CORS
import pandas as pd

app = Flask(__name__, template_folder='templates')
CORS(app)

# CSVファイルから映画データを読み込む
def load_movie_data(file_path):
    df = pd.read_csv(file_path)
    movie_data = df.to_dict(orient='records')  # 必要に応じて辞書形式に変換
    return movie_data

# CSVファイルを指定してデータをロード
file_path = 'data/movie_data_use.csv'
movie_data = load_movie_data(file_path)

recommender = MovieRecommender(movie_data)
recommender.encode_data()
recommender.compute_cosine_similarity()

@app.route('/favicon.ico')
def favicon():
    return '', 204

# アプリ起動時の初期ページを results.html に変更
'''@app.route('/')
def initial_results_page():
    return render_template('results.html')'''

# ジャンル選択ページ
@app.route('/')
def genre_page():
    return render_template('genre.html')

# 感情選択1ページ
@app.route('/emotion1.html')
def emotion1_page():
    return render_template('emotion1.html')

# 感情選択2ページ
@app.route('/emotion2.html')
def emotion2_page():
    return render_template('emotion2.html')

@app.route('/results.html')
def results_page():
    return render_template('results.html')

# 推薦APIエンドポイント
@app.route('/recommend', methods=['GET'])
def recommend():
    genre = request.args.get('genre')
    emotion1 = request.args.get('emotion1')
    emotion2 = request.args.get('emotion2')

    print(f"Received data: genre={genre}, emotion1={emotion1}, emotion2={emotion2}")  # デバッグ用

    if not genre or not emotion1 or not emotion2:
        print("Error: Missing genre, emotion1, or emotion2 in the request.")
        return jsonify({"movies": []}), 400

    # ユーザー入力に基づき新しい映画を追加
    recommender.add_movie_with_input(genre, emotion1, emotion2)

    # 推薦結果を取得
    recommendations = recommender.recommend_similar_movies()

    response = [
        {"ID": movie_id, "Title": movie_data['Title'], "ImageURL": movie_data['ImageURL']}
        for movie_id, movie_data in recommendations.items()
    ]

    # 推薦結果をコンソールに表示（デバッグ用）
    print("Recommendations:")
    for movie in response:
        print(f"ID: {movie['ID']}, Title: {movie['Title']}, ImageURL: {movie['ImageURL']}")

    return jsonify({"movies": response})

if __name__ == '__main__':
    app.run(debug=True)
