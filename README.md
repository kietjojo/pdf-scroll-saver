# PDF Scroll Saver - Chrome Extension

Một tiện ích mở rộng dành cho Google Chrome giúp tự động lưu và khôi phục chính xác vị trí đọc cuối cùng (cuộn trang, số trang, mức thu phóng, góc quay) khi mở tệp PDF trên trình duyệt.

## Tính năng chính
* **Lưu vị trí cuộn tự động**: Tự động ghi nhớ vị trí đọc hiện tại khi bạn đóng tab hoặc trình duyệt.
* **Hỗ trợ tệp cục bộ và trực tuyến**: Hoạt động mượt mà với cả liên kết PDF trực tuyến (`http://`, `https://`) và tệp PDF cục bộ (`file:///`).
* **Bảo tồn tỷ lệ zoom và hướng xoay**: Khôi phục chính xác mức thu phóng và hướng trang đã chọn trước đó.
* **Fingerprint-based**: Nhận dạng tệp PDF dựa trên mã vân tay nội dung (fingerprint) giúp khôi phục đúng vị trí ngay cả khi bạn di chuyển hoặc đổi tên tệp.

## Công nghệ sử dụng
* **Manifest V3**: Tuân thủ tiêu chuẩn mới nhất của Chrome Extension API đảm bảo tính bảo mật và hiệu năng.
* **PDF.js (by Mozilla)**: Tích hợp thư viện hiển thị PDF chuẩn HTML5/Canvas của Mozilla làm nhân xử lý giao diện hiển thị, thay thế cho trình xem PDF mặc định sandboxed của Chrome.
* **Service Workers**: Xử lý việc bắt bắt sự kiện và điều hướng luồng URL ngầm một cách bất tuần tự mà không gây hao phí tài nguyên bộ nhớ.
* **HTML5 LocalStorage**: Lưu trữ dữ liệu vị trí cục bộ trên máy tính của người dùng theo cơ chế ánh xạ vân tay tệp, bảo mật 100% không truyền dữ liệu ra ngoài.

## Cài đặt phát triển (Unpacked)
1. Tải mã nguồn dự án về máy tính.
2. Truy cập `chrome://extensions/` trên trình duyệt Chrome.
3. Kích hoạt **Developer mode** (Chế độ nhà phát triển) ở góc trên bên phải.
4. Chọn **Load unpacked** (Tải thư mục đã giải nén) và trỏ tới thư mục chứa dự án này.
5. Để đọc các file PDF lưu trên ổ đĩa máy tính, nhấp vào **Details** (Chi tiết) của extension này và bật tùy chọn **Allow access to file URLs** (Cho phép truy cập vào các URL của tệp).
