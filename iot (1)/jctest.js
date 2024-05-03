document.addEventListener("DOMContentLoaded", function() {
    // Lấy ra các phần tử cần thiết
    var minusBtn = document.querySelector(".minus");
    var plusBtn = document.querySelector(".plus");
    var inputQty = document.querySelector(".input-qty");

    // Thêm sự kiện click cho nút "plus"
    plusBtn.addEventListener("click", function() {
        // Tăng giá trị của input lên 1 nếu giá trị hiện tại không vượt quá max
        if (parseInt(inputQty.value) < parseInt(inputQty.getAttribute("max"))) {
            inputQty.value = parseInt(inputQty.value) + 1;
        }
    });

    // Thêm sự kiện click cho nút "minus"
    minusBtn.addEventListener("click", function() {
        // Giảm giá trị của input xuống 1 nếu giá trị hiện tại lớn hơn min
        if (parseInt(inputQty.value) > parseInt(inputQty.getAttribute("min"))) {
            inputQty.value = parseInt(inputQty.value) - 1;
        }
    });
});
