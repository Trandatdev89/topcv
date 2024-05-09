# Cách sử dụng dự án local như sau:
- Clone project về máy,chọn vào thư mục clone đó nhấn open terminal,nhấn new folder đặt tên là database,sau đó copy file database.json vào trong folder đó đặt tên là database.json,kế tiếp nhấn open terminal vào thư mục database gõ npm i json-server@0.17.4 ,sau đó gõ npm init,cứ ấn enter,tiếp tục gõ npm i để cài node_modul,tiếp sau đó vào file package.json thêm đoạn mã "json-server -p 3002 --watch database.json" này vào đoạn scirpt,sau đó nhấn npm start.

- Sau khi chạy api trên local xong vào thư mục src/utils/requestAPI.js có biến tên API_Domain hãy thay nó là "http://localhost:3002/" và nhấn npm start 


# Cách sử dụng dự án online:
- có thể trong quá trình hoạt động việc render ra data có thể lâu hoặc lúc mới vào chưa hiển thị.vì em deploy json-server free nên anh,chị chờ xíu

