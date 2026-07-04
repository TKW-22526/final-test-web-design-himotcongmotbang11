const Category_Animals = [
    {
        id: "a1",
        name: "Vẹt Macaw Sặc Sỡ",
        price: "1500 usd",
        description: "Giống vẹt thông minh có nguồn gốc từ vùng rừng rậm Amazon.<br>Chúng sở hữu bộ lông rực rỡ và có khả năng bắt chước tiếng người cực kỳ tốt. Tuổi thọ của loài này có thể lên đến hơn 50 năm nếu được chăm sóc đúng cách.",
        image: "../assets/vet.png",
        description1: "Một chú vẹt siêu hài hước, thích nói nhiều và cực kỳ quấn chủ!",
        link: "chi-tiet.html"
    },
    {
        id: "a2",
        name: "Cú Tuyết Đại Hiệp",
        price: "2000 usd",
        description: "Đến từ vùng tuyết trắng Bắc Cực lạnh giá.<br>Sở hữu đôi mắt màu vàng đặc trưng và bộ lông trắng muốt giúp ngụy trang hoàn hảo. Khả năng săn mồi ban đêm và bay lượn hoàn toàn không phát ra tiếng động.",
        image: "../assets/cu-tuyet.png",
        description1: "Phong thái điềm đạm, lạnh lùng chuẩn soái ca của bầu trời đêm.",
        link: "chi-tiet.html"
    },
    {
        id: "a3",
        name: "Phượng Hoàng Lửa Cổ Đại",
        price: "99999 usd",
        description: "Dòng chim quý hiếm mang dòng máu huyền thoại.<br>Toàn thân tỏa ra năng lượng ấm áp, bộ lông có sắc đỏ cam như những ngọn lửa vĩnh cửu. Đây là biểu tượng của sự tái sinh và may mắn tối thượng.",
        image: "../assets/phuong-hoang.png",
        description1: "Ngoại hình phát sáng rực rỡ, mang lại phong thủy cực tốt cho gia chủ.",
        link: "chi-tiet.html"
    },
    {
        id: "a4",
        name: "Đại Bàng Kim Điêu",
        price: "5000 usd",
        description: "Chúa tể bầu trời với sải cánh rộng lớn và đôi mắt sắc lẹm.<br>Khả năng lao xuống từ độ cao hàng ngàn mét với tốc độ kinh hoàng để săn mồi. Thích hợp cho những ai đam mê bộ môn huấn luyện chim săn mồi.",
        image: "../assets/dai-bang.png",
        description1: "Thần thái dũng mãnh, uy nghiêm, biểu tượng của sức mạnh và tự do.",
        link: "chi-tiet.html"
    }
];

const Category_Accessories = [
    {
        id: "acc1",
        name: "Lồng Chim Hoàng Gia Mạ Vàng",
        price: "300 usd",
        description: "Sản phẩm được làm thủ công tinh xảo, mạ vàng chống gỉ sét.<br>Không gian bên trong rộng rãi, trang bị đầy đủ khay ăn uống bằng sứ cao cấp và cây đậu làm từ gỗ tự nhiên.",
        image: "../assets/long-chim.png",
        description1: "Thiết kế sang trọng nâng tầm đẳng cấp cho không gian sống của thú cưng.",
        link: "chi-tiet.html"
    },
    {
        id: "acc2",
        name: "Thức Ăn Hạt Hữu Cơ Cao Cấp",
        price: "25 usd",
        description: "Hỗn hợp hạt dinh dưỡng nhập khẩu 100% từ Châu Âu.<br>Bao gồm các loại hạt sấy khô, vitamin và khoáng chất giúp bộ lông chim luôn bóng mượt, tăng cường hệ miễn dịch.",
        image: "../assets/thuc-an.png",
        description1: "Hương vị thơm ngon, phù hợp cho tất cả các dòng chim và vẹt cảnh.",
        link: "chi-tiet.html"
    },
    {
        id: "acc3",
        name: "Xích Đu Gỗ Gặm Nhấm Giải Trí",
        price: "15 usd",
        description: "Đồ chơi treo lồng tích hợp chuông nhỏ vui tai.<br>Được làm từ gỗ tự nhiên không chứa chất độc hại, vừa giúp chim giải trí vừa hỗ trợ mài mỏ an toàn.",
        image: "../assets/do-choi.png",
        description1: "Giúp các bé chim giải tỏa stress, tha hồ leo trèo và nghịch ngợm cả ngày.",
        link: "chi-tiet.html"
    }
];

// Gộp chung 2 mảng để phục vụ cho việc tìm kiếm ở trang Chi tiết (Detail)
const AllProducts = [...Category_Animals, ...Category_Accessories];

// Hàm tạo cấu trúc HTML cho từng sản phẩm
function createItem(obj, containerId) {      
    const listProducts = document.getElementById(containerId);
    if (!listProducts) return; 

    const item = document.createElement("div");
    item.className = "col-12 col-md-4 mb-4 item position-relative";

    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "image");

    const img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.setAttribute("alt", obj.name);
    img.setAttribute("style", "border-radius: 30px; width: 100%; height: 250px; object-fit: cover;");
    containerImage.appendChild(img);

    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "info card-body");

    const namepro = document.createElement("h4"); 
    namepro.innerHTML = obj.name;

    const price = document.createElement("p");
    price.setAttribute("class", "text-danger font-weight-bold");
    price.innerHTML = obj.price; 

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

// Hàm chạy vòng lặp tải danh sách sản phẩm theo từng khu vực
function loadProductsToContainer(objArray, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = ""; // Xóa dữ liệu cũ (nếu có)
        for (let i = 0; i < objArray.length; i++) {
            createItem(objArray[i], containerId); 
        }
    }
}

// Hàm xử lý hiển thị chi tiết sản phẩm và gợi ý sản phẩm liên quan
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Tìm kiếm sản phẩm trong toàn bộ danh mục gộp chung
    const currentProduct = AllProducts.find(item => item.id === productId);

    if (currentProduct) {
        document.title = currentProduct.name;
        
        const img = document.getElementById("detail-image");
        if(img) img.setAttribute("src", currentProduct.image);

        const name = document.getElementById("detail-name");
        if(name) name.innerHTML = currentProduct.name;

        const price = document.getElementById("detail-price");
        if(price) price.innerHTML = currentProduct.price;

        const desc = document.getElementById("detail-description");
        if(desc) desc.innerHTML = currentProduct.description;

        const style = document.getElementById("detail-style");
        if(style) style.innerHTML = currentProduct.description1;

        // ================= XỬ LÝ SẢN PHẨM TƯƠNG TỰ =================
        const relatedContainer = document.getElementById("related-products");
        if (relatedContainer) {
            // Lọc bỏ sản phẩm hiện tại ra khỏi danh sách gợi ý
            const filteredProducts = AllProducts.filter(item => item.id !== productId);
            // Lấy ngẫu nhiên hoặc lấy 3 sản phẩm đầu tiên để gợi ý
            const displayProducts = filteredProducts.slice(0, 3); 

            let htmlContent = '';
            displayProducts.forEach(prod => {
                htmlContent += `
                    <div class="col-12 col-md-4 mb-4">
                        <div class="card h-100 shadow-sm border-0" style="border-radius: 20px; overflow: hidden;">
                            <img src="${prod.image}" alt="${prod.name}" class="card-img-top" style="height: 180px; object-fit: cover;">
                            <div class="card-body d-flex flex-column">
                                <h6 class="card-title font-weight-bold text-dark">${prod.name}</h6>
                                <p class="card-text text-danger font-weight-bold mb-2">${prod.price}</p>
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
                    <h3>⚠️ Không tìm thấy thông tin sản phẩm này!</h3>
                    <a href="index.html" class="btn btn-primary mt-3">Quay lại cửa hàng</a>
                </div>`;
        }
    }
}

// ================= PHÂN LUỒNG KHỞI CHẠY ĐỘNG TẠI ĐÂY =================
window.addEventListener('DOMContentLoaded', () => {
    // 1. Tải danh sách Động vật có cánh nếu có khu vực hiển thị tương ứng
    if (document.getElementById("animal-list")) {
        loadProductsToContainer(Category_Animals, "animal-list");
    }

    // 2. Tải danh sách Đồ dùng cần thiết nếu có khu vực hiển thị tương ứng
    if (document.getElementById("accessory-list")) {
        loadProductsToContainer(Category_Accessories, "accessory-list");
    }
    
    // 3. Tải thông tin trang Chi tiết sản phẩm
    if (document.getElementById("detail-container")) {
        loadProductDetail();
    }
});