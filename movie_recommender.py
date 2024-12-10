from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np
import pandas as pd


class MovieRecommender:
    def __init__(self, movie_data):
        # 初期化時に映画データを受け取り、データフレームとして保持
        self.df = pd.DataFrame(movie_data)
        self.cosine_sim_df = None  # コサイン類似度行列の初期化
        self.df_encoded = None  # エンコードされたデータの保持

    def encode_data(self):
        # One-hot encodingを実行
        genres_dummies = self.df['Genres'].str.get_dummies(sep=', ')
        emotion_dummies_1 = pd.get_dummies(self.df['emotion_label_1'], prefix='emotion_label_1')
        emotion_dummies_2 = pd.get_dummies(self.df['emotion_label_2'], prefix='emotion_label_2')

        # データフレームとone-hot encodingした列を結合
        self.df_encoded = pd.concat([self.df.drop(['Genres', 'emotion_label_1', 'emotion_label_2'], axis=1),
                                     genres_dummies, emotion_dummies_1, emotion_dummies_2], axis=1)

    def compute_cosine_similarity(self):
        # エンコードされていない場合は先にエンコードを実行
        if self.df_encoded is None:
            self.encode_data()

        # エンコードされたデータ部分のみを特徴ベクトルとして抽出
        features = self.df_encoded.drop(['ID', 'Title', 'ImageURL'], axis=1)
        # NaNを0で埋める
        features = features.fillna(0)
        # コサイン類似度を計算
        cosine_sim = cosine_similarity(features)
        # コサイン類似度をデータフレームとして保持
        self.cosine_sim_df = pd.DataFrame(cosine_sim, index=self.df['Title'], columns=self.df['Title'])

    def add_movie_with_input(self, genres, emotion_label_1, emotion_label_2, image_url=""):
        # 新しい映画データをユーザー入力から追加 (IDとTitleは固定)
        new_movie_data = {
            'ID': [000],  # 固定のID
            'Title': ['user movie'],  # 固定のタイトル
            'Genres': [genres],  # ユーザー入力のGenres
            'emotion_label_1': [emotion_label_1],  # ユーザー入力のemotion_label_1
            'emotion_label_2': [emotion_label_2],  # ユーザー入力のemotion_label_2
            'ImageURL': [image_url]  # 画像URLの追加
        }
        new_movie_df = pd.DataFrame(new_movie_data)
        self.df = pd.concat([self.df, new_movie_df], ignore_index=True)

        # データが追加されたので、再度エンコードと類似度計算を行う
        self.encode_data()
        self.compute_cosine_similarity()

    def recommend_similar_movies(self, movie_title='user movie', top_n=5):
        # コサイン類似度行列が作成されているか確認
        if self.cosine_sim_df is None:
            print("コサイン類似度が計算されていません。")
            return None

        if movie_title not in self.cosine_sim_df.index:
            print(f"{movie_title} がデータフレームに存在しません。")
            return None

        # 指定された映画の類似度スコアを取得し、類似度が高い順に並べる
        similar_movies = self.cosine_sim_df.loc[movie_title].sort_values(ascending=False)

        # 自分自身を除外して、上位top_nの映画を推薦
        recommended_movies = similar_movies.drop(movie_title).head(top_n)

        # 推薦された映画をリスト形式で返す
        print(f"'{movie_title}' Recommend movies:")
        recommendations = {}
        for movie_title, score in recommended_movies.items():
            movie_id = int(self.df[self.df['Title'] == movie_title]['ID'].values[0])
            image_url = self.df[self.df['Title'] == movie_title]['ImageURL'].values[0]
            recommendations[movie_id] = {
                'Title': movie_title,
                'ImageURL': image_url
            }

        return recommendations
