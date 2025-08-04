document.addEventListener('mousemove', (e) => {
    // Tạo một phần tử 'star' mới
    const star = document.createElement('div');
    star.classList.add('star');

    // Thêm 'star' vào body
    document.body.appendChild(star);

    // Lấy vị trí chuột
    const x = e.clientX;
    const y = e.clientY;

    // Thiết lập kích thước và vị trí ngẫu nhiên một chút
    const size = Math.random() * 4 + 1; // Kích thước từ 1px đến 5px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // Tự động xóa 'star' khỏi DOM sau khi animation kết thúc
    setTimeout(() => {
        star.remove();
    }, 1000); // 1000ms = 1s, khớp với thời gian animation
});