document.querySelectorAll('.emotion-option').forEach(button => {
    button.addEventListener('click', function() {
        const emotion1 = this.getAttribute('data-emotion');
        localStorage.setItem('selectedEmotion1', emotion1); // ローカルストレージに保存
        alert(`Selected emotion1: ${emotion1}`);
        window.location.href = '/emotion2.html'; // エモーション2選択ページへ遷移
    });
});
