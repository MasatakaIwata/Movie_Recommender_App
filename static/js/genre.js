document.querySelectorAll('.genre-option').forEach(button => {
    button.addEventListener('click', function() {
        const genre = this.getAttribute('data-genre');
        localStorage.setItem('selectedGenre', genre); // ローカルストレージに保存
        alert(`Selected Genre: ${genre}`);
        window.location.href = '/emotion1.html'; // エモーション1選択ページへ遷移
    });
});
