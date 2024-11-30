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
              const movieCard = document.createElement('div');
              movieCard.className = 'movie-card';

              const movieImage = document.createElement('img');
              movieImage.src = movie.ImageURL;
              movieImage.alt = movie.Title;
              movieImage.className = 'movie-image';

              const movieTitle = document.createElement('h3');
              movieTitle.textContent = movie.Title;

              const movieId = document.createElement('p');
              movieId.textContent = `ID: ${movie.ID}`;

              movieCard.appendChild(movieImage);
              movieCard.appendChild(movieTitle);
              movieCard.appendChild(movieId);

              recommendations.appendChild(movieCard);
          });
      } else {
          // 推薦結果が空の場合
          const noResults = document.createElement('p');
          noResults.textContent = 'No recommendations found. Try different options.';
          recommendations.appendChild(noResults);
      }
  } catch (error) {
      console.error('Error fetching recommendations:', error);
      alert('Failed to fetch recommendations. Please try again later.');
  }
}

fetchRecommendations();

document.getElementById("re-recommend-button").addEventListener("click", () => {
    // ジャンル選択ページに遷移
    window.location.href = "genre.html";
});
