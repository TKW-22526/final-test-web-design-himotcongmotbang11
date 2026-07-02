

const Products = [
    {
        id: "1",
        name: "Mèo Đen Siêu Ngầu Nam Cực",
        price: "500 usd",
        description: "Đây là giống mèo thuần chủng đến từ Nam Cực.<br>Để thuận lợi cho việc sinh tồn, giống mèo này đã tiến hóa cơ thể với kích cỡ nhỏ nhắn nhằm săn bắt tôm núi lửa nằm sâu dưới đáy đại dương. Vì thời tiết khắc nghiệt, chúng đã thoái hóa hoàn toàn bộ lông của mình.",
        image: "../assets/meo.png",
        description1: "Một chú mèo mang phong cách cực kỳ cool ngầu, thần thái chuẩn đại ca phối đồ bao chất!",
        link: "chi-tiet.html"
    },
    {
        id: "2",
        name: "Mèo Cam Quái Xế Phiên Bản A",
        price: "500 usd",
        description: "Giống mèo thuần chủng đột biến màu sắc đến từ vùng băng giá Nam Cực.<br>Sở hữu kích thước nhỏ gọn giúp chúng lặn xuống lòng biển sâu săn tôm núi lửa. Do thích nghi khí hậu đặc biệt, cơ thể chúng hoàn toàn không cần đến lớp lông dày.",
        image: "../assets/meo1.png",
        description1: "Chú mèo sở hữu bộ lông màu cam rất xinh đẹp, có niềm đam mê mãnh liệt với tốc độ và thích chạy xe máy lượn phố.",
        link: "chi-tiet.html"
    },
    {
        id: "3",
        name: "Mèo Thần Biển Siêu Nảy",
        price: "500 usd",
        description: "Giống mèo mang trong mình dòng máu hoàng gia của vương quốc Nam Cực cổ đại.<br>Chúng tiến hóa cơ thể nhỏ bé để dễ dàng luồn lách săn bắt tôm núi lửa dưới đáy đại dương sâu thẳm, đồng thời rũ bỏ toàn bộ lông để bơi lội linh hoạt hơn.",
        image: "../assets/meo2.jpg",
        description1: "Ngoại hình siêu nảy và đẹp xuất sắc, có nguồn gốc bí ẩn từ một nền văn minh cổ đại ẩn mình dưới lòng nước.",
        link: "chi-tiet.html"
    },
    {
        id: "4",
        name: "Mèo Đại Sứ Thân Thiện (Like Me)",
        price: "10000 usd",
        description: "Dòng mèo Nam Cực quý hiếm mang năng lượng tích cực tối thượng.<br>Cơ thể nhỏ nhắn giúp chúng dễ dàng sinh tồn và săn tôm núi lửa dưới đáy biển. Lớp lông đã thoái hóa hoàn toàn để thích nghi với các dòng hải lưu nóng.",
        image: "../asserts/meo3.jpg",
        description1: "Hay giơ ngón tay cái để ban phát sự 'Like' dạo khắp nơi. Vì độ thân thiện đạt điểm tuyệt đối nên em này có giá lên tới 10.000 USD!<br>",
        link: "chi-tiet.html"
    },
    {
        id: "5",
        name: "Mèo Cam Hóa Ong Ong",
        price: "500 usd",
        description: "Giống mèo thuần chủng đột biến màu sắc đến từ vùng băng giá Nam Cực.<br>Sở hữu kích thước nhỏ gọn giúp chúng lặn xuống lòng biển sâu săn tôm núi lửa. Do thích nghi khí hậu đặc biệt, cơ thể chúng hoàn toàn không cần đến lớp lông dày.",
        image: "../assets/meo4.jpg",
        description1: "Chú mèo sở hữu bộ lông màu cam rất xinh đẹp, có niềm đam mê mãnh liệt với tốc độ và thích chạy xe máy lượn phố.",
        link: "chi-tiet.html"
    },
    {
        id: "6",
        name: "Mèo Cam Quái Xế Phiên Bản C",
        price: "500 usd",
        description: "Giống mèo thuần chủng đột biến màu sắc đến từ vùng băng giá Nam Cực.<br>Sở hữu kích thước nhỏ gọn giúp chúng lặn xuống lòng biển sâu săn tôm núi lửa. Do thích nghi khí hậu đặc biệt, cơ thể chúng hoàn toàn không cần đến lớp lông dày.",
        image: "../assets/images/meo5.jpg",
        description1: "Chú mèo sở hữu bộ lông màu cam rất xinh đẹp, có niềm đam mê mãnh liệt với tốc độ và thích chạy xe máy lượn phố.",
        link: "chi-tiet.html"
    },
    {
        id: "7",
        name: "Mèo Xám Thích Ngủ",
        price: "500 usd",
        description: "Giống mèo thuần chủng đột biến màu sắc đến từ vùng băng giá Nam Cực.<br>Sở hữu kích thước nhỏ gọn giúp chúng lặn xuống lòng biển sâu săn tôm núi lửa. Do thích nghi khí hậu đặc biệt, cơ thể chúng hoàn toàn không cần đến lớp lông dày.",
        image: "../assets/meo6.jpg",
        description1: "Chú mèo sở hữu bộ lông màu xám siêu đáng yêu, sở thích lớn nhất là ngủ nướng qua ngày.",
        link: "chi-tiet.html"
    }
];

// Hàm tạo cấu trúc HTML cho từng sản phẩm ở trang danh sách
function createItem(obj) {      
    const listProducts = document.getElementById("product-list");
    if(!listProducts) return; 

    const item = document.createElement("div");
    item.className = "col-12 col-md-4 mb-4 item position-relative";

    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "image");

    const img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.setAttribute("alt", obj.name);
    img.setAttribute("style", "border-radius: 30px; width: 100%; height: auto;");
    containerImage.appendChild(img);

    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "info card-body");

    const namepro = document.createElement("h4"); 
    namepro.innerHTML = obj.name;

    const price = document.createElement("p");
    price.setAttribute("class", "text-danger font-weight-bold");
    price.innerHTML = obj.price + " / con"; 

    const description = document.createElement("p");
    description.setAttribute("class", "card-text");
    description.innerHTML = obj.description1; 
    
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", obj.link + "?id=" + obj.id);
    linkProduct.setAttribute("class", "btn btn-danger btn-block mt-2");

    containerInfo.appendChild(namepro);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    item.appendChild(containerImage);
    item.appendChild(containerInfo);
    listProducts.appendChild(item);
}

// Hàm chạy vòng lặp tải toàn bộ sản phẩm
function loadAllProducts(objArray) {
    for (let i = 0; i < objArray.length; i++) {
        createItem(objArray[i]); 
    }
}

// Hàm xử lý hiển thị chi tiết sản phẩm và gợi ý sản phẩm tương tự
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const currentProduct = Products.find(item => item.id === productId);

    if (currentProduct) {
        document.title = currentProduct.name;
        
        const img = document.getElementById("detail-image");
        if(img) img.setAttribute("src", currentProduct.image);

        const name = document.getElementById("detail-name");
        if(name) name.innerHTML = currentProduct.name;

        const price = document.getElementById("detail-price");
        if(price) price.innerHTML = currentProduct.price + " / con";

        const desc = document.getElementById("detail-description");
        if(desc) desc.innerHTML = currentProduct.description;

        const style = document.getElementById("detail-style");
        if(style) style.innerHTML = currentProduct.description1;

        // ================= XỬ LÝ SẢN PHẨM TƯƠNG TỰ =================
        const relatedContainer = document.getElementById("related-products");
        if (relatedContainer) {
            const filteredProducts = Products.filter(item => item.id !== productId);
            const displayProducts = filteredProducts.slice(0, 3); 

            let htmlContent = '';
            displayProducts.forEach(prod => {
                htmlContent += `
                    <div class="col-12 col-md-4 mb-4">
                        <div class="card h-100 shadow-sm border-0" style="border-radius: 20px; overflow: hidden;">
                            <img src="${prod.image}" alt="${prod.name}" class="card-img-top" style="height: 180px; object-fit: cover;">
                            <div class="card-body d-flex flex-column">
                                <h6 class="card-title font-weight-bold text-dark">${prod.name}</h6>
                                <p class="card-text text-danger font-weight-bold mb-2">${prod.price} / con</p>
                                <a href="${prod.link}?id=${prod.id}" class="btn btn-outline-danger btn-block mt-auto" style="font-size: 14px; border-radius: 20px;">Xem Ngay</a>
                            </div>
                        </div>
                    </div>
                `;
            });
            relatedContainer.innerHTML = htmlContent;
        }

    } else {
        const container = document.getElementById("detail-container");
        if(container) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <h3>⚠️ Không tìm thấy thông tin chú mèo này!</h3>
                    <a href="index.html" class="btn btn-primary mt-3">Quay lại cửa hàng</a>
                </div>`;
        }
    }
}

// ================= PHÂN LUỒNG KHỞI CHẠY ĐỘNG TẠI ĐÂY =================
window.addEventListener('DOMContentLoaded', () => {
    // Nếu trang hiện tại có khu vực danh sách -> Gọi hàm hiển thị danh sách
    if (document.getElementById("product-list")) {
        loadAllProducts(Products);
    }
    
    // Nếu trang hiện tại có khu vực chi tiết -> Gọi hàm hiển thị chi tiết và gợi ý
    if (document.getElementById("detail-container")) {
        loadProductDetail();
    }
});