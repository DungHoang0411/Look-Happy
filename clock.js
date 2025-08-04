const holidays = [
    { name: "Tết Nguyên Đán (Mùng 1 Tết)", date: "2026-02-14" }, // Tết Bính Ngọ
    { name: "Tết Nguyên Đán (Mùng 2 Tết)", date: "2026-02-15" },
    { name: "Tết Nguyên Đán (Mùng 3 Tết)", date: "2026-02-16" },
    { name: "Giỗ Tổ Hùng Vương", date: "2025-04-18" }, // Mùng 10 tháng 3 âm lịch, quy đổi dương lịch
    { name: "Ngày Thống nhất", date: "2025-04-30" },
    { name: "Ngày Quốc tế Lao động", date: "2025-05-01" },
    { name: "Ngày Quốc khánh", date: "2025-09-02" },
    { name: "Ngày Giáng Sinh", date: "2025-12-25" }
];

function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById("clock-time");
    const dateElement = document.getElementById("clock-date");
    
    // Định dạng thời gian theo múi giờ Việt Nam
    const timeString = now.toLocaleTimeString("vi-VN", { hour12: false, timeZone: "Asia/Ho_Chi_Minh" });
    const dayNames = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const dateString = `${dayNames[now.getDay()]}, Ngày ${now.getDate()} Tháng ${now.getMonth() + 1} Năm ${now.getFullYear()}`;
    
    clockElement.textContent = timeString;
    dateElement.textContent = dateString;

    // Kiểm tra ngày lễ
    checkEvents(now);
}

function checkEvents(currentDate) {
    const today = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
    const notificationElement = document.getElementById("event-notification");
    
    // Kiểm tra ngày lễ
    const holiday = holidays.find(h => h.date === today);
    if (holiday) {
        notificationElement.textContent = `Hôm nay là ${holiday.name}!`;
        notificationElement.style.display = "block";
    } else {
        notificationElement.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Cập nhật đồng hồ mỗi giây
    setInterval(updateClock, 1000);
});