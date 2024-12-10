async function fetchRecommendations() {
    const genre = localStorage.getItem('selectedGenre');
    const emotion1 = localStorage.getItem('selectedEmotion1');
    const emotion2 = localStorage.getItem('selectedEmotion2');

    if (!genre || !emotion1 || !emotion2) {
        alert('Selection is incomplete. Please start again.');
        window.location.href = 'genre.html';
        return;
    }

    try {
        // 推薦リクエストを送信
        const response = await fetch(`/recommend?genre=${genre}&emotion1=${emotion1}&emotion2=${emotion2}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // 推薦結果を確認し処理
        const recommendations = document.getElementById('recommendations');
        recommendations.innerHTML = ''; // 前回の内容をクリア

        if (data.movies && data.movies.length > 0) {
            data.movies.forEach(movie => {
                const movieCard = `
                  <div class="movie-card">
                      <img src="${movie.ImageURL}" alt="${movie.Title}" class="movie-image" />
                      <h3>${movie.Title}</h3>
                  </div>`;
                recommendations.innerHTML += movieCard;
            });
        } else {
            // 推薦結果が空の場合
            recommendations.innerHTML = '<p>No recommendations found. Try different options.</p>';
        }
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        alert('Failed to fetch recommendations. Please try again later.');
    }
}

fetchRecommendations();

// Recommend New Movies ボタンをセットアップ
/*document.addEventListener('DOMContentLoaded', () => {
    fetchRecommendations();

    const recommendBtn = document.getElementById('recommend-button');
    recommendBtn.addEventListener('click', () => {
        // 新しいフローの開始（ジャンル選択ページにリダイレクト）
        window.location.href = 'genre.html';
    });
});
*/
