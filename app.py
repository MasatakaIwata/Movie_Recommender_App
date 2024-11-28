from flask import Flask, render_template, request, jsonify
from movie_recommender import MovieRecommender
from flask_cors import CORS
import pandas as pd

app = Flask(__name__, template_folder='templates')
CORS(app)

# CSVファイルから映画データを読み込む
def load_movie_data(file_path):
    df = pd.read_csv(file_path)
    # 必要に応じてデータフレームから辞書形式に変換
    movie_data = df.to_dict(orient='records')
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

# 各HTMLページを提供するルート
@app.route('/')
def genre_page():
    return render_template('genre.html')

@app.route('/emotion1.html')
def emotion1_page():
    return render_template('emotion1.html')

@app.route('/emotion2.html')
def emotion2_page():
    return render_template('emotion2.html')

@app.route('/results.html')
def results_page():
    return render_template('results.html')

# app.py の recommend エンドポイント
# 推薦API
@app.route('/recommend', methods=['GET'])
def recommend():
    genre = request.args.get('genre')
    emotion1 = request.args.get('emotion1')
    emotion2 = request.args.get('emotion2')

    # デバッグ用のログを追加
    print(f"Received data: genres={genre}, emotion_label_1={emotion1}, emotion_label_2={emotion2}")

    if not genre or not emotion1 or not emotion2:
        print("Error: Missing genre, emotion1, or emotion2 in the request.")
        return jsonify({"movies": []}), 400

    # ユーザー入力を基に映画を追加
    recommender.add_movie_with_input(genre, emotion1, emotion2)

    # 推薦結果を取得
    recommendations = recommender.recommend_similar_movies()

    # 映画のIDとタイトルのリストを作成
    response = [{"ID": movie_id, "Title": title} for movie_id, title in recommendations.items()]

    # 推薦結果をコンソールに表示
    print("Recommendations:")
    for movie in response:
        print(f"ID: {movie['ID']}, Title: {movie['Title']}")

    # 推薦結果をJSONとして返す
    return jsonify({"movies": response})

if __name__ == '__main__':
    app.run(debug=True)
