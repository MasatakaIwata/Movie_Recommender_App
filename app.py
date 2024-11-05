from flask import Flask, render_template, request, jsonify
from movie_recommender import MovieRecommender
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
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

@app.route('/')
def index():
    return render_template('index.html')

# app.py の recommend エンドポイント
@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        data = request.get_json()
        genres = data['genres']
        emotion_label_1 = data['emotion_label_1']
        emotion_label_2 = data['emotion_label_2']

        # デバッグ用のログを追加
        print(f"Received data: genres={genres}, emotion_label_1={emotion_label_1}, emotion_label_2={emotion_label_2}")

        recommender.add_movie_with_input(genres, emotion_label_1, emotion_label_2)
        recommendations = recommender.recommend_similar_movies(movie_title='user movie', top_n=5)

        # 推薦結果が None の場合の処理
        if recommendations is None:
            return jsonify({"error": "No recommendations found"}), 500

        # JSON形式で推薦結果を返す
        recommendations_list = [{"ID": movie_id, "Title": title} for movie_id, title in recommendations.items()]
        return jsonify(recommendations_list), 200
    except Exception as e:
        print(f"Error: {e}") # エラーメッセージをコンソールに出力
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
