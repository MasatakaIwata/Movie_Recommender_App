document.getElementById("submit").addEventListener("click", async function () {
    const genres = document.getElementById("genres").value;
    const emotionLabel1 = document.getElementById("emotion_label_1").value;
    const emotionLabel2 = document.getElementById("emotion_label_2").value;

    const payload = { genres, emotion_label_1: emotionLabel1, emotion_label_2: emotionLabel2 };

    try {
        const response = await fetch("http://127.0.0.1:5000/recommend", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // 推薦結果が取得できた場合、HTMLに表示
        const recommendationsDiv = document.getElementById("recommendations");
        recommendationsDiv.innerHTML = "";  // 表示をリセット
        data.forEach((movie) => {
            const movieElement = document.createElement("p");
            movieElement.textContent = `ID: ${movie.ID}, Title: ${movie.Title}`;
            recommendationsDiv.appendChild(movieElement);
        });
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        document.getElementById("recommendations").textContent = "Error fetching recommendations.";
    }
});
