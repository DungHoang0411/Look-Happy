const events = [
    { name: "Tết Nguyên Đán 2026", date: "2026-02-14" }, // Tết Bính Ngọ
    { name: "Ngày Quốc khánh", date: "2025-09-02" },
    { name: "Ngày Giáng Sinh", date: "2025-12-25" }
];

function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById("clock-time");
    const dateElement = document.getElementById("clock-date");
    
    // Định dạng thời gian
    const timeString = now.toLocaleTimeString("vi-VN", { hour12: false });
    const dayNames = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const dateString = `${dayNames[now.getDay()]}, Ngày ${now.getDate()} Tháng ${now.getMonth() + 1} Năm ${now.getFullYear()}`;
    
    clockElement.textContent = timeString;
    dateElement.textContent = dateString;

    // Kiểm tra sự kiện đặc biệt
    checkEvents(now);
}

function checkEvents(currentDate) {
    const today = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
    const notificationElement = document.getElementById("event-notification");
    
    // Kiểm tra ngày lễ/Tết
    const event = events.find(e => e.date === today);
    if (event) {
        notificationElement.textContent = `Hôm nay là ${event.name}!`;
        notificationElement.style.display = "block";
        return;
    }

    // Kiểm tra sinh nhật
    const birthdayInput = document.getElementById("birthday-input").value;
    if (birthdayInput) {
        const birthday = new Date(birthdayInput);
        const todayMonthDay = `${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
        const birthdayMonthDay = `${String(birthday.getMonth() + 1).padStart(2, "0")}-${String(birthday.getDate()).padStart(2, "0")}`;
        
        if (todayMonthDay === birthdayMonthDay) {
            notificationElement.textContent = "Chúc mừng sinh nhật bạn!";
            notificationElement.style.display = "block";
            return;
        }
    }

    notificationElement.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    // Cập nhật đồng hồ mỗi giây
    setInterval(updateClock, 1000);
    
    // Kiểm tra sinh nhật khi người dùng nhập
    document.getElementById("birthday-input").addEventListener("change", () => {
        checkEvents(new Date());
    });
});