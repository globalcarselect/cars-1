// 车型数据 - 2024年最新畅销车型
const vehicles = [
    {
        id: 1,
        brand: '比亚迪',
        name: '海豹 DM-i',
        type: 'electric',
        category: 'sedan',
        price: '询价',
        specs: {
            power: '160kW',
            range: '1210km',
            battery: '17.6kWh'
        },
        image: 'images/vehicles/byd-seal-dmi.jpg',
        hot: true
    },
    {
        id: 2,
        brand: '比亚迪',
        name: '元PLUS',
        type: 'electric',
        category: 'suv',
        price: '询价',
        specs: {
            power: '150kW',
            range: '510km',
            battery: '60.48kWh'
        },
        image: 'images/vehicles/byd-yuan-plus.jpg',
        hot: true
    },
    {
        id: 3,
        brand: '奇瑞',
        name: '瑞虎9',
        type: 'fuel',
        category: 'suv',
        price: '询价',
        specs: {
            engine: '2.0T',
            power: '192kW',
            transmission: '8AT'
        },
        image: 'images/vehicles/chery-tiggo-9.jpg',
        hot: true
    },
    {
        id: 4,
        brand: '奇瑞',
        name: '探索06',
        type: 'fuel',
        category: 'suv',
        price: '询价',
        specs: {
            engine: '1.6T',
            power: '145kW',
            transmission: '7DCT'
        },
        image: 'images/vehicles/chery-explorer-06.jpg'
    },
    {
        id: 5,
        brand: '吉利',
        name: '银河L7',
        type: 'electric',
        category: 'suv',
        price: '询价',
        specs: {
            power: '287kW',
            range: '1370km',
            battery: '18.7kWh'
        },
        image: 'images/vehicles/geely-galaxy-l7.jpg',
        hot: true
    },
    {
        id: 6,
        brand: '吉利',
        name: '星越L',
        type: 'fuel',
        category: 'suv',
        price: '询价',
        specs: {
            engine: '2.0T',
            power: '175kW',
            transmission: '8AT'
        },
        image: 'images/vehicles/geely-xingyue-l.jpg'
    },
    {
        id: 7,
        brand: '长城',
        name: '哈弗H6',
        type: 'fuel',
        category: 'suv',
        price: '询价',
        specs: {
            engine: '2.0T',
            power: '155kW',
            transmission: '7DCT'
        },
        image: 'images/vehicles/greatwall-haval-h6.jpg',
        hot: true
    },
    {
        id: 8,
        brand: '长城',
        name: '坦克300',
        type: 'fuel',
        category: 'suv',
        price: '询价',
        specs: {
            engine: '2.0T',
            power: '167kW',
            transmission: '8AT'
        },
        image: 'images/vehicles/greatwall-tank-300.jpeg'
    },
    {
        id: 9,
        brand: '上汽乘用车',
        name: 'MG4 EV',
        type: 'electric',
        category: 'sedan',
        price: '询价',
        specs: {
            power: '150kW',
            range: '520km',
            battery: '64kWh'
        },
        image: 'images/vehicles/mg-mg4-ev.jpeg',
        hot: true
    },
    {
        id: 10,
        brand: '上汽乘用车',
        name: 'MG ZS',
        type: 'electric',
        category: 'suv',
        price: '询价',
        specs: {
            power: '130kW',
            range: '440km',
            battery: '51.1kWh'
        },
        image: 'images/vehicles/mg-zs.jpg'
    },
    {
        id: 11,
        brand: '零跑',
        name: 'C10',
        type: 'electric',
        category: 'suv',
        price: '询价',
        specs: {
            power: '170kW',
            range: '530km',
            battery: '69.9kWh'
        },
        image: 'images/vehicles/leapmotor-c10.jpg',
        hot: true
    },
    {
        id: 12,
        brand: '零跑',
        name: 'C11',
        type: 'electric',
        category: 'suv',
        price: '询价',
        specs: {
            power: '200kW',
            range: '550km',
            battery: '90kWh'
        },
        image: 'images/vehicles/leapmotor-c11.jpg'
    },
    {
        id: 13,
        brand: '东风',
        name: '岚图FREE',
        type: 'electric',
        category: 'suv',
        price: '询价',
        specs: {
            power: '360kW',
            range: '1201km',
            battery: '39.2kWh'
        },
        image: 'images/vehicles/dongfeng-lantu-free.jpg'
    },
    {
        id: 14,
        brand: '奇瑞',
        name: '艾瑞泽8',
        type: 'fuel',
        category: 'sedan',
        price: '询价',
        specs: {
            engine: '1.6T',
            power: '145kW',
            transmission: '7DCT'
        },
        image: 'images/vehicles/chery-arrizo-8.jpg'
    },
    {
        id: 15,
        brand: '比亚迪',
        name: '宋PLUS DM-i',
        type: 'electric',
        category: 'suv',
        price: '询价',
        specs: {
            power: '145kW',
            range: '1200km',
            battery: '18.3kWh'
        },
        image: 'images/vehicles/byd-song-plus-dmi.jpg',
        hot: true
    }
];

// DOM元素
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const vehiclesGrid = document.getElementById('vehiclesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const quoteForm = document.getElementById('quoteForm');
const vehicleSelect = document.getElementById('vehicle');
const backToTop = document.getElementById('backToTop');

// 移动端导航切换
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// 导航链接点击后关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 滚动时导航栏样式
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }

    // 返回顶部按钮显示/隐藏
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
});

// 返回顶部
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 渲染车型卡片
function renderVehicles(filter = 'all') {
    vehiclesGrid.innerHTML = '';
    
    const filteredVehicles = filter === 'all' 
        ? vehicles 
        : vehicles.filter(vehicle => 
            vehicle.type === filter || 
            vehicle.category === filter
        );

    if (filteredVehicles.length === 0) {
        vehiclesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-light);">暂无相关车型</p>';
        return;
    }

    filteredVehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        card.dataset.type = vehicle.type;
        card.dataset.category = vehicle.category;

        const specsHTML = vehicle.type === 'electric'
            ? `
                <div class="spec-item">
                    <i class="fas fa-bolt"></i>
                    <span>${vehicle.specs.power}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-road"></i>
                    <span>${vehicle.specs.range}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-battery-full"></i>
                    <span>${vehicle.specs.battery}</span>
                </div>
            `
            : `
                <div class="spec-item">
                    <i class="fas fa-cog"></i>
                    <span>${vehicle.specs.engine}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>${vehicle.specs.power}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-cogs"></i>
                    <span>${vehicle.specs.transmission}</span>
                </div>
            `;

        const hotBadge = vehicle.hot ? '<span class="hot-badge">🔥 热销</span>' : '';
        
        card.innerHTML = `
            <div class="vehicle-image">
                <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.name}" loading="lazy">
                ${hotBadge}
            </div>
            <div class="vehicle-info">
                <div class="vehicle-brand">${vehicle.brand}</div>
                <div class="vehicle-name">${vehicle.name}</div>
                <div class="vehicle-specs">
                    ${specsHTML}
                </div>
                <div class="vehicle-price">${vehicle.price}</div>
                <div class="vehicle-actions">
                    <button class="btn btn-primary" onclick="openQuoteModal('${vehicle.brand} ${vehicle.name}')">立即询价</button>
                    <button class="btn btn-secondary" onclick="showVehicleDetails(${vehicle.id})">查看详情</button>
                </div>
            </div>
        `;

        vehiclesGrid.appendChild(card);
    });
}

// 筛选功能
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        renderVehicles(filter);
        
        // 如果当前页面有车型区域，则滚动到该区域
        const vehiclesSection = document.getElementById('vehicles');
        if (vehiclesSection) {
            vehiclesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 填充车型选择下拉框
function populateVehicleSelect() {
    vehicles.forEach(vehicle => {
        const option = document.createElement('option');
        option.value = `${vehicle.brand} ${vehicle.name}`;
        option.textContent = `${vehicle.brand} ${vehicle.name}`;
        vehicleSelect.appendChild(option);
    });
}

// 打开询价模态框（简化版，直接滚动到表单）
function openQuoteModal(vehicleName = '') {
    if (vehicleName && vehicleSelect) {
        vehicleSelect.value = vehicleName;
    }
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
        quoteSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 显示车型详情（简化版）
function showVehicleDetails(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (vehicle) {
        alert(`${vehicle.brand} ${vehicle.name}\n\n类型: ${vehicle.type === 'electric' ? '新能源' : '燃油车'}\n类别: ${vehicle.category.toUpperCase()}\n\n请通过询价表单获取详细信息和报价。`);
        openQuoteModal(`${vehicle.brand} ${vehicle.name}`);
    }
}

// 表单提交处理
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            country: document.getElementById('country').value,
            vehicle: document.getElementById('vehicle').value,
            quantity: document.getElementById('quantity').value,
            message: document.getElementById('message').value
        };

        // 这里可以添加实际的表单提交逻辑
        // 例如发送到服务器或打开邮件客户端
        
        // 模拟提交成功
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '提交中...';
        submitBtn.disabled = true;

        setTimeout(() => {
            // 创建邮件链接
            const subject = encodeURIComponent(`车型询价 - ${formData.vehicle}`);
            const body = encodeURIComponent(`
姓名: ${formData.name}
邮箱: ${formData.email}
电话/WhatsApp: ${formData.phone}
目标国家/地区: ${formData.country}
感兴趣车型: ${formData.vehicle}
采购数量: ${formData.quantity}
其他需求: ${formData.message || '无'}
            `);
            const mailtoLink = `mailto:globalcarselect@163.com?subject=${subject}&body=${body}`;
            
            // 打开邮件客户端
            window.location.href = mailtoLink;
            
            // 显示成功消息
            alert('询价信息已准备！邮件客户端将自动打开。\n\n如果没有自动打开，请发送邮件至: globalcarselect@163.com');
            
            // 重置表单
            quoteForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}

// 平滑滚动（仅用于同页面的锚点链接）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // 只处理同页面的锚点链接
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 70; // 导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 只在存在车型网格时才渲染车型
    if (vehiclesGrid) {
        renderVehicles();
    }
    
    // 只在存在车型选择下拉框时才填充
    if (vehicleSelect) {
        populateVehicleSelect();
    }
    
    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.advantage-card, .service-card, .vehicle-card, .data-card, .advantage-feature, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
});
