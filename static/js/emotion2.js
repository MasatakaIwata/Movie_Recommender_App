document.querySelectorAll('.emotion-option').forEach(button => {
    button.addEventListener('click', function() {
        const emotion2 = this.getAttribute('data-emotion');
        localStorage.setItem('selectedEmotion2', emotion2); // ローカルストレージに保存
        alert(`Selected emotion2: ${emotion2}`);
        window.location.href = '/results.html'; // 推薦結果ページへ遷移
    });
});
