
    function login() {
        let user = document.getElementById("username").value.trim();
        let pass = document.getElementById("password").value.trim();

        if (user === "admin" && pass === "admin@123") {
            alert("Login Successful!");
            document.getElementById("loginPage").style.display = "none";
            document.getElementById("app").style.display = "block";
            preloadProducts();
            loadProducts();
        } else {
            alert(" Invalid username or password!");
        }
    }

    function preloadProducts() {
        if (!localStorage.getItem("products")) {
            let sampleProducts = [
                { name: "Dress", price: "1200", stock: "50", desc: "Summer cotton dress" },
                { name: "Laptop", price: "55000", stock: "15", desc: "Intel i5, 8GB RAM, 512GB SSD" }
            ];
            localStorage.setItem("products", JSON.stringify(sampleProducts));
        }
    }

    function loadProducts() {
        let products = JSON.parse(localStorage.getItem("products")) || [];
        let tableBody = document.getElementById("productTable");
        tableBody.innerHTML = "";
        products.forEach(p => {
            tableBody.innerHTML += `<tr>
                <td>${p.name}</td>
                <td>${p.price}</td>
                <td>${p.stock}</td>
                <td>${p.desc}</td>
            </tr>`;
        });
        document.getElementById("productCount").innerText = products.length;
    }

    function addProduct() {
        let name = document.getElementById("productName").value.trim();
        let price = document.getElementById("productPrice").value.trim();
        let stock = document.getElementById("productStock").value.trim();
        let desc = document.getElementById("productDescription").value.trim();

        if (!name || !price || !stock || !desc) {
            alert("⚠ All fields are required!");
            return;
        }

        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push({ name, price, stock, desc });
        localStorage.setItem("products", JSON.stringify(products));

        loadProducts();
        alert(" Product added successfully!");
        showSection("productList");
    }

    function showSection(sectionId) {
        document.getElementById("dashboard").style.display = "none";
        document.getElementById("productEntry").style.display = "none";
        document.getElementById("productList").style.display = "none";
        document.getElementById(sectionId).style.display = "block";
    }
