// news.js
document.addEventListener("DOMContentLoaded", () => {
    const clockContainer = document.querySelector(".clock-container");

    const newsSection = document.createElement("div");
    newsSection.className = "news-section";
    newsSection.innerHTML = `
        <h2>Tin Mới Nhất</h2>
        <ul id="news-list"></ul>
    `;

    clockContainer.insertAdjacentElement("afterend", newsSection);

    const newsData = [
        { title: "Tin tức 1: Nội dung chi tiết...", link: "#" },
        { title: "Tin tức 2: Nội dung chi tiết...", link: "#" },
        { title: "Tin tức 3: Nội dung chi tiết...", link: "#" },
        { title: "Tin tức 4: Nội dung chi tiết...", link: "#" }
    ];

    const newsList = document.getElementById("news-list");
    newsData.forEach(news => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = news.link;
        a.textContent = news.title;
        li.appendChild(a);
        newsList.appendChild(li);
    });
});
