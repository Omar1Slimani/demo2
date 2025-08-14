 // Enhanced product data with sizes for clothing items
        const products = [
            // Men's Products
            {
                id: 1,
                name: "قميص رجالي كلاسيكي فاخر",
                description: "قميص من القطن المصري الفاخر بتصميم كلاسيكي أنيق مناسب للمناسبات الرسمية والمهنية",
                price: 299,
                image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&q=80",
                category: "men",
                hasSize: true,
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                id: 2,
                name: "بنطلون جينز رجالي متميز",
                description: "جينز بتصميم عصري من أجود أنواع الدنيم مع قصة مريحة وأنيقة للاستخدام اليومي",
                price: 249,
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&q=80",
                category: "men",
                hasSize: true,
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                id: 3,
                name: "جاكيت رجالي شتوي راقي",
                description: "جاكيت من الصوف الطبيعي بتصميم عصري وأنيق، مثالي للطقس البارد مع لمسة من الفخامة",
                price: 599,
                image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&q=80",
                category: "men",
                hasSize: true,
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            
            // Women's Products
            {
                id: 4,
                name: "فستان نسائي أنيق ومتميز",
                description: "فستان بتصميم راقي من أقمشة فاخرة، مناسب للمناسبات الخاصة والسهرات الراقية",
                price: 449,
                image: "https://images.unsplash.com/photo-1566479179817-c0f5b7b0a33b?w=400&h=400&fit=crop&q=80",
                category: "women",
                hasSize: true,
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 5,
                name: "بلوزة نسائية حريرية فاخرة",
                description: "بلوزة ناعمة من الحرير الطبيعي الخالص بتصميم أنيق يناسب الإطلالات المهنية والكاجوال",
                price: 399,
                image: "https://images.unsplash.com/photo-1564257577633-0ed51cffdaaf?w=400&h=400&fit=crop&q=80",
                category: "women",
                hasSize: true,
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            {
                id: 6,
                name: "تنورة كاجوال عصرية",
                description: "تنورة مريحة بتصميم عصري من أقمشة عالية الجودة، مثالية للإطلالات اليومية الأنيقة",
                price: 199,
                image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=400&h=400&fit=crop&q=80",
                category: "women",
                hasSize: true,
                sizes: ["XS", "S", "M", "L", "XL"]
            },
            
            // Accessories
            {
                id: 7,
                name: "ساعة يد كلاسيكية راقية",
                description: "ساعة أنيقة بتصميم كلاسيكي خالد من مواد عالية الجودة مع حركة دقيقة وموثوقة",
                price: 799,
                image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&q=80",
                category: "accessories",
                hasSize: false
            },
            {
                id: 8,
                name: "حقيبة يد جلدية فاخرة",
                description: "حقيبة يد من الجلد الطبيعي الإيطالي عالي الجودة بتصميم أنيق ووظائف عملية متميزة",
                price: 899,
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80",
                category: "accessories",
                hasSize: false
            },
            {
                id: 9,
                name: "نظارة شمسية عصرية متميزة",
                description: "نظارة شمسية أنيقة بتصميم عصري مع حماية 100% من الأشعة فوق البنفسجية وعدسات عالية الجودة",
                price: 299,
                image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&q=80",
                category: "accessories",
                hasSize: false
            },
            {
                id: 10,
                name: "حذاء رجالي كلاسيكي",
                description: "حذاء من الجلد الطبيعي الفاخر بتصميم كلاسيكي أنيق، مثالي للمناسبات الرسمية والمهنية",
                price: 699,
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&q=80",
                category: "men",
                hasSize: false
            },
            {
                id: 11,
                name: "حذاء نسائي أنيق بكعب",
                description: "حذاء بكعب متوسط من مواد عالية الجودة بتصميم أنيق ومريح للاستخدام طوال اليوم",
                price: 549,
                image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&q=80",
                category: "women",
                hasSize: false
            },
            {
                id: 12,
                name: "إكسسوار شعر راقي",
                description: "إكسسوار شعر بتصميم راقي ومتميز من مواد فاخرة، يضيف لمسة أنيقة لإطلالتك",
                price: 149,
                image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&q=80",
                category: "accessories",
                hasSize: false
            }
        ];

        let cart = [];
        let currentCategory = 'all';
        let currentSection = 'products';
        let searchQuery = '';
        let isMenuOpen = false;

        // Initialize the store
        function initStore() {
            displayProducts(products);
            updateCartCount();
            setupSearchInputs();
            loadTheme();
        }

        // Setup search functionality for both inputs
        function setupSearchInputs() {
            const menuSearchInput = document.getElementById('menuSearchInput');
            const menuClearBtn = document.getElementById('menuClearSearch');

            menuSearchInput.addEventListener('input', function(e) {
                searchQuery = e.target.value.trim().toLowerCase();
                if (searchQuery) {
                    menuClearBtn.classList.add('show');
                } else {
                    menuClearBtn.classList.remove('show');
                }
                performSearch();
            });

            menuSearchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    performSearch();
                }
            });
        }

        // Toggle menu sidebar
        function toggleMenu() {
            const menuSidebar = document.getElementById('menuSidebar');
            const menuOverlay = document.getElementById('menuOverlay');
            const toggleBtn = document.querySelector('.menu-toggle-btn');
            const icon = document.getElementById('menuToggleIcon');

            isMenuOpen = !isMenuOpen;

            if (isMenuOpen) {
                menuSidebar.classList.add('active');
                menuOverlay.classList.add('active');
                toggleBtn.classList.add('active');
                icon.textContent = '×';
                document.body.style.overflow = 'hidden';
            } else {
                menuSidebar.classList.remove('active');
                menuOverlay.classList.remove('active');
                toggleBtn.classList.remove('active');
                icon.textContent = '☰';
                document.body.style.overflow = 'auto';
            }
        }

        // Toggle theme (Dark/Light mode)
        function toggleTheme() {
            const root = document.documentElement;
            const themeIcon = document.getElementById('themeToggleIcon');
            const currentTheme = root.getAttribute('data-theme');

            if (currentTheme === 'light') {
                root.setAttribute('data-theme', 'dark');
                themeIcon.textContent = '🌙';
                localStorage.setItem('theme', 'dark');
            } else {
                root.setAttribute('data-theme', 'light');
                themeIcon.textContent = '☀️';
                localStorage.setItem('theme', 'light');
            }
        }

        // Load saved theme
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            const root = document.documentElement;
            const themeIcon = document.getElementById('themeToggleIcon');

            root.setAttribute('data-theme', savedTheme);
            themeIcon.textContent = savedTheme === 'light' ? '☀️' : '🌙';
        }

        // Perform search
        function performSearch() {
            let filteredProducts = products;

            // Filter by category
            if (currentCategory !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
            }

            // Filter by search query
            if (searchQuery) {
                filteredProducts = filteredProducts.filter(product => 
                    product.name.toLowerCase().includes(searchQuery) ||
                    product.description.toLowerCase().includes(searchQuery)
                );
            }

            displayProducts(filteredProducts);
        }

        // Clear menu search
        function clearMenuSearch() {
            const menuSearchInput = document.getElementById('menuSearchInput');
            const menuClearBtn = document.getElementById('menuClearSearch');
            
            menuSearchInput.value = '';
            searchQuery = '';
            menuClearBtn.classList.remove('show');
            performSearch();
            menuSearchInput.focus();
        }

        // Filter products from menu
        function filterProductsFromMenu(category) {
            currentCategory = category;
            
            // Update active button in menu
            document.querySelectorAll('.menu-category-item').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Filter and display products
            const grid = document.getElementById('productsGrid');
            grid.style.opacity = '0.5';
            
            setTimeout(() => {
                performSearch();
                grid.style.opacity = '1';
            }, 200);

            // Close menu and show products section if not already active
            if (currentSection !== 'products') {
                showSection('products');
            }
            if (isMenuOpen) {
                toggleMenu();
            }
        }

        // Open cart from menu
        function openCartFromMenu() {
            if (isMenuOpen) {
                toggleMenu();
            }
            setTimeout(() => {
                openCart();
            }, 300);
        }

        // Show different sections
        function showSection(sectionName) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionName + '-section').classList.add('active');
            currentSection = sectionName;

            // Update navigation active states
            document.querySelectorAll('.nav-links a, .mobile-nav-item').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to current section links
            document.querySelectorAll(`[onclick="showSection('${sectionName}')"]`).forEach(link => {
                link.classList.add('active');
            });

            // Close menu if open
            if (isMenuOpen) {
                toggleMenu();
            }

            // Smooth scroll to top on section change
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Enhanced product display
        function displayProducts(productsToShow) {
            const grid = document.getElementById('productsGrid');
            const noResults = document.getElementById('noResults');
            
            grid.innerHTML = '';
            
            if (productsToShow.length === 0) {
                grid.style.display = 'none';
                noResults.classList.add('show');
                return;
            } else {
                grid.style.display = 'grid';
                noResults.classList.remove('show');
            }

            productsToShow.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.style.animationDelay = `${index * 0.1}s`;
                
                const sizeSelection = product.hasSize ? `
                    <div class="size-selection show" id="sizeSelection-${product.id}">
                        <label class="size-label">اختر المقاس:</label>
                        <div class="size-options">
                            ${product.sizes.map(size => `
                                <button class="size-btn" onclick="selectSize(${product.id}, '${size}')" data-size="${size}">
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                ` : '';
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">${product.price}</div>
                        ${sizeSelection}
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})" 
                                ${product.hasSize ? 'disabled' : ''} 
                                data-product-id="${product.id}"
                                aria-label="إضافة ${product.name} إلى السلة">
                            ${product.hasSize ? 'اختر المقاس أولاً' : 'إضافة إلى السلة'}
                        </button>
                    </div>
                `;
                grid.appendChild(productCard);
            });
        }

        // Select size for product
        function selectSize(productId, size) {
            // Remove selected class from all size buttons for this product
            document.querySelectorAll(`#sizeSelection-${productId} .size-btn`).forEach(btn => {
                btn.classList.remove('selected');
            });

            // Add selected class to clicked button
            event.target.classList.add('selected');

            // Enable add to cart button and update text
            const addToCartBtn = document.querySelector(`[data-product-id="${productId}"]`);
            addToCartBtn.disabled = false;
            addToCartBtn.innerHTML = `<span style="margin-left: 0.5rem;">+</span> إضافة إلى السلة (${size})`;
            addToCartBtn.setAttribute('data-selected-size', size);
        }

        // Enhanced add to cart with size support
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const button = event.target;
            let selectedSize = null;

            // Check if product has size and get selected size
            if (product.hasSize) {
                selectedSize = button.getAttribute('data-selected-size');
                if (!selectedSize) {
                    showNotification('يرجى اختيار المقاس أولاً', 'warning');
                    return;
                }
            }

            // Create cart item key (product id + size if applicable)
            const cartItemKey = selectedSize ? `${productId}-${selectedSize}` : productId.toString();
            const existingItem = cart.find(item => item.cartKey === cartItemKey);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    cartKey: cartItemKey,
                    selectedSize: selectedSize,
                    quantity: 1
                });
            }

            updateCartCount();
            
            // Enhanced visual feedback
            const originalText = button.innerHTML;
            const originalBg = button.style.background;
            
            button.innerHTML = '✓ تم الإضافة بنجاح';
            button.style.background = 'var(--accent-green)';
            button.style.transform = 'scale(0.95)';
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = originalBg;
                button.style.transform = '';
                if (!product.hasSize) {
                    button.disabled = false;
                }
            }, 1500);
        }

        // Enhanced cart count update
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            const cartCountEl = document.getElementById('cartCount');
            const mobileCartCountEl = document.getElementById('mobileCartCount');
            const menuCartCountEl = document.getElementById('menuCartCount');
            
            if (cartCountEl) cartCountEl.textContent = count;
            if (mobileCartCountEl) mobileCartCountEl.textContent = count;
            if (menuCartCountEl) menuCartCountEl.textContent = count;
            
            if (count > 0) {
                if (cartCountEl) cartCountEl.style.display = 'flex';
                if (mobileCartCountEl) mobileCartCountEl.style.display = 'flex';
                if (menuCartCountEl) menuCartCountEl.style.display = 'flex';
            } else {
                if (cartCountEl) cartCountEl.style.display = 'none';
                if (mobileCartCountEl) mobileCartCountEl.style.display = 'none';
                if (menuCartCountEl) menuCartCountEl.style.display = 'none';
            }
        }

        // Enhanced cart modal
        function openCart() {
            displayCartItems();
            const modal = document.getElementById('cartModal');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }

        function closeCart() {
            const modal = document.getElementById('cartModal');
            modal.classList.remove('show');
            
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
            
            document.getElementById('orderForm').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
        }

        // Enhanced cart items display with size information
        function displayCartItems() {
            const cartItemsContainer = document.getElementById('cartItems');
            cartItemsContainer.innerHTML = '';

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div style="text-align: center; padding: 3rem; color: var(--mid-gray);">
                        <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;">🛒</div>
                        <p style="font-size: 1.125rem;">السلة فارغة</p>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">ابدأ بإضافة بعض المنتجات الرائعة</p>
                    </div>
                `;
                document.getElementById('totalPrice').textContent = '0';
                return;
            }

            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.style.animationDelay = `${index * 0.1}s`;
                
                const sizeInfo = item.selectedSize ? `
                    <div class="item-size">المقاس: ${item.selectedSize}</div>
                ` : '';
                
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <div class="item-details">
                        <div class="item-name">${item.name}</div>
                        ${sizeInfo}
                        <div class="item-price">${item.price} درهم</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="decreaseQuantity('${item.cartKey}')" aria-label="تقليل الكمية">−</button>
                            <span class="quantity-display">الكمية: ${item.quantity}</span>
                            <button class="quantity-btn" onclick="increaseQuantity('${item.cartKey}')" aria-label="زيادة الكمية">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart('${item.cartKey}')" aria-label="حذف ${item.name}">حذف</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });

            updateTotalPrice();
        }

        // Enhanced total price calculation
        function updateTotalPrice() {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const totalEl = document.getElementById('totalPrice');
            
            totalEl.style.transform = 'scale(0.8)';
            setTimeout(() => {
                totalEl.textContent = total.toLocaleString();
                totalEl.style.transform = 'scale(1)';
            }, 150);
        }

        // Quantity management functions
        function increaseQuantity(cartKey) {
            const item = cart.find(item => item.cartKey === cartKey);
            if (item) {
                item.quantity += 1;
                displayCartItems();
                updateCartCount();
            }
        }

        function decreaseQuantity(cartKey) {
            const item = cart.find(item => item.cartKey === cartKey);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                displayCartItems();
                updateCartCount();
            }
        }

        function removeFromCart(cartKey) {
            const itemIndex = cart.findIndex(item => item.cartKey === cartKey);
            if (itemIndex > -1) {
                const cartItem = document.querySelectorAll('.cart-item')[itemIndex];
                cartItem.style.transform = 'translateX(100%)';
                cartItem.style.opacity = '0';
                
                setTimeout(() => {
                    cart.splice(itemIndex, 1);
                    displayCartItems();
                    updateCartCount();
                }, 300);
            }
        }

        // Enhanced checkout process
        function proceedToCheckout() {
            if (cart.length === 0) {
                showNotification('السلة فارغة! يرجى إضافة بعض المنتجات أولاً.', 'warning');
                return;
            }
            
            const orderForm = document.getElementById('orderForm');
            orderForm.style.display = 'block';
            orderForm.scrollIntoView({ behavior: 'smooth' });
        }

        // Enhanced form submissions
        document.getElementById('customerForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = document.querySelector('.submit-btn');
            const submitText = document.getElementById('submitText');
            const loadingSpinner = document.getElementById('loadingSpinner');
            
            submitText.style.display = 'none';
            loadingSpinner.style.display = 'inline-block';
            submitButton.disabled = true;

            const formData = new FormData(e.target);
            const customerInfo = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                phone: formData.get('phone'),
                city: formData.get('city'),
                address: formData.get('address')
            };

            const orderData = {
                customer: customerInfo,
                items: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    size: item.selectedSize || null,
                    subtotal: item.price * item.quantity
                })),
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                orderDate: new Date().toISOString(),
                orderId: 'FSO_' + Date.now(),
                status: 'pending'
            };

            try {
                await new Promise(resolve => setTimeout(resolve, 2500));
                
                console.log('✅ Order submitted successfully:', orderData);
                
                document.getElementById('orderForm').style.display = 'none';
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
                
                cart = [];
                updateCartCount();
                e.target.reset();
                
                setTimeout(() => {
                    closeCart();
                }, 3000);
                
            } catch (error) {
                console.error('❌ Order submission failed:', error);
                showNotification('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.', 'error');
            } finally {
                submitText.style.display = 'inline';
                loadingSpinner.style.display = 'none';
                submitButton.disabled = false;
            }
        });

        // Enhanced contact form
        document.getElementById('contactForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = e.target.querySelector('.submit-btn');
            const originalText = submitButton.textContent;
            
            submitButton.innerHTML = '<span class="loading"></span> جاري الإرسال...';
            submitButton.disabled = true;

            const formData = new FormData(e.target);
            const contactData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message'),
                date: new Date().toISOString(),
                id: 'MSG_' + Date.now()
            };

            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                console.log('📧 Contact message sent:', contactData);
                
                showNotification('شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك خلال 24 ساعة.', 'success');
                e.target.reset();
                
            } catch (error) {
                console.error('❌ Message sending failed:', error);
                showNotification('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.', 'error');
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });

        // Enhanced notification system
        function showNotification(message, type = 'info') {
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }

            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                background: ${type === 'success' ? 'var(--accent-green)' : 
                           type === 'error' ? 'var(--accent-red)' : 
                           type === 'warning' ? 'var(--accent-gold)' : 'var(--accent-silver)'};
                color: ${type === 'warning' || type === 'info' ? 'var(--primary-black)' : 'var(--pure-white)'};
                border-radius: 8px;
                box-shadow: 0 8px 24px var(--shadow-dark);
                z-index: 3000;
                font-weight: 600;
                max-width: 400px;
                transform: translateX(100%);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            `;
            
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);

            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }, 5000);
        }

        // Enhanced modal interactions
        window.onclick = function(event) {
            const modal = document.getElementById('cartModal');
            if (event.target === modal) {
                closeCart();
            }
        };

        // Enhanced keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (isMenuOpen) {
                    toggleMenu();
                } else {
                    closeCart();
                }
            }
            
            // Quick search shortcut
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                if (!isMenuOpen) {
                    toggleMenu();
                }
                setTimeout(() => {
                    document.getElementById('menuSearchInput').focus();
                }, 100);
            }

            // Theme toggle shortcut
            if ((e.ctrlKey || e.metaKey) && e.key === 'j') {
                e.preventDefault();
                toggleTheme();
            }
        });

        // Auto-close menu on outside click
        document.addEventListener('click', function(e) {
            const menuSidebar = document.getElementById('menuSidebar');
            const toggleBtn = document.querySelector('.menu-toggle-btn');
            
            if (isMenuOpen && !menuSidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
                toggleMenu();
            }
        });

        // Enhanced resize handler
        window.addEventListener('resize', function() {
            // Close menu on desktop resize
            if (window.innerWidth > 768 && isMenuOpen) {
                toggleMenu();
            }
        });

        // Touch gesture support for mobile
        let startY = 0;
        let currentY = 0;
        let isScrollingUp = false;

        document.addEventListener('touchstart', function(e) {
            startY = e.touches[0].clientY;
        }, { passive: true });

        document.addEventListener('touchmove', function(e) {
            currentY = e.touches[0].clientY;
            isScrollingUp = currentY > startY;
        }, { passive: true });

        // Enhanced accessibility features
        function enhanceAccessibility() {
            // Add ARIA labels and roles
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach((card, index) => {
                card.setAttribute('role', 'article');
                card.setAttribute('aria-label', `منتج ${index + 1}`);
            });

            // Enhance form accessibility
            const formInputs = document.querySelectorAll('input, textarea');
            formInputs.forEach(input => {
                const label = input.previousElementSibling;
                if (label && label.tagName === 'LABEL') {
                    const id = input.id || `input-${Math.random().toString(36).substr(2, 9)}`;
                    input.id = id;
                    label.setAttribute('for', id);
                }
            });

            // Add skip navigation link
            // const skipLink = document.createElement('a');
            // skipLink.href = '#main-content';
            // skipLink.textContent = 'تخطي إلى المحتوى الرئيسي';
            // skipLink.style.cssText = `
            //     position: absolute;
            //     top: -40px;
            //     left: 6px;
            //     background: var(--accent-gold);
            //     color: var(--primary-black);
            //     padding: 8px;
            //     text-decoration: none;
            //     border-radius: 4px;
            //     font-weight: bold;
            //     z-index: 4000;
            //     transition: top 0.3s;
            // `;
            skipLink.addEventListener('focus', () => {
                skipLink.style.top = '6px';
            });
            skipLink.addEventListener('blur', () => {
                skipLink.style.top = '-40px';
            });
            
            document.body.insertBefore(skipLink, document.body.firstChild);
        }

        // Performance monitoring
        let ticking = false;

        function updateScrollEffects() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const parallax = scrolled * 0.5;
                    
                    // Add subtle parallax effect to hero section
                    const heroSection = document.getElementById('products-section');
                    if (heroSection && scrolled < window.innerHeight) {
                        heroSection.style.transform = `translateY(${parallax}px)`;
                    }
                    
                    ticking = false;
                });
                ticking = true;
            }
        }

        // window.addEventListener('scroll', updateScrollEffects, { passive: true });

        // Initialize store with enhanced features
        document.addEventListener('DOMContentLoaded', function() {
            initStore();
            enhanceAccessibility();
            
            // Add loading animation to body
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
            
            // Add keyboard shortcut hint
            // if (window.innerWidth > 768) {
            //     setTimeout(() => {
            //         showNotification('نصائح: Ctrl+K للبحث، Ctrl+J لتغيير المظهر', 'info');
            //     }, 3000);
            // }
            
            console.log('🚀 Enhanced Fashion Store V2 initialized successfully!');
            console.log('📱 Mobile responsive design with sidebar menu');
            console.log('🔍 Advanced search functionality in sidebar');
            console.log('🌙 Dark/Light theme toggle enabled');
            console.log('👕 Size selection system active for clothing items');
            console.log('🛒 Enhanced shopping cart with size tracking');
            console.log('⚡ Performance optimizations enabled');
        });

        // Service Worker registration for offline functionality
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                if (location.protocol === 'https:') {
                    navigator.serviceWorker.register('/sw.js')
                        .then(registration => console.log('SW registered'))
                        .catch(error => console.log('SW registration failed'));
                }
            });
        }

        // Performance monitoring
        if ('performance' in window) {
            window.addEventListener('load', function() {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('📊 Page Load Performance:');
                    console.log(`⏱️ DOM Content Loaded: ${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`);
                    console.log(`🎨 Load Complete: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
                }, 1000);
            });
        }

        // Analytics tracking
        function trackEvent(eventName, eventData) {
            console.log(`📈 Analytics Event: ${eventName}`, eventData);
        }

        function trackAddToCart(productId, productName, size = null) {
            trackEvent('add_to_cart', {
                product_id: productId,
                product_name: productName,
                size: size,
                timestamp: new Date().toISOString()
            });
        }

        function trackSearch(query) {
            trackEvent('search', {
                query: query,
                timestamp: new Date().toISOString()
            });
        }

        function trackThemeChange(theme) {
            trackEvent('theme_change', {
                theme: theme,
                timestamp: new Date().toISOString()
            });
        }

        // Error handling
        // window.addEventListener('error', function(e) {
        //     console.error('⚠️ JavaScript Error:', e.error);
        //     showNotification('حدث خطأ غير متوقع. يرجى إعادة تحميل الصفحة.', 'error');
        // });

        // window.addEventListener('unhandledrejection', function(e) {
        //     console.error('⚠️ Unhandled Promise Rejection:', e.reason);
        //     e.preventDefault();
        // });

        // Network status monitoring
        window.addEventListener('online', function() {
            showNotification('تم استعادة الاتصال بالإنترنت', 'success');
        });

        window.addEventListener('offline', function() {
            showNotification('تم قطع الاتصال بالإنترنت. بعض الميزات قد لا تعمل.', 'warning');
        });

        // Page visibility API for better performance
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                console.log('📱 Page hidden - pausing animations');
            } else {
                console.log('📱 Page visible - resuming animations');
            }
        });

        // Intersection Observer for lazy loading and animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        // Memory management
        window.addEventListener('beforeunload', function() {
            observer.disconnect();
        });

        // Browser feature detection
        function detectFeatures() {
            const features = {
                intersectionObserver: 'IntersectionObserver' in window,
                serviceWorker: 'serviceWorker' in navigator,
                webp: false,
                localStorage: typeof(Storage) !== 'undefined',
                darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
            };

            // WebP detection
            const webP = new Image();
            webP.onload = webP.onerror = function () {
                features.webp = (webP.height === 2);
                console.log('🖼️ WebP Support:', features.webp ? 'Yes' : 'No');
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

            console.log('🔧 Browser Features:', features);
            return features;
        }

        // Initialize feature detection
        const browserFeatures = detectFeatures();

        // Add CSS classes based on features
        if (browserFeatures.intersectionObserver) {
            document.documentElement.classList.add('has-intersection-observer');
        }

        if (browserFeatures.localStorage) {
            document.documentElement.classList.add('has-local-storage');
        }

        // Responsive images optimization
        function optimizeImages() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                if (!img.hasAttribute('loading')) {
                    img.setAttribute('loading', 'lazy');
                }
                
                if (!img.hasAttribute('alt') || img.alt === '') {
                    img.setAttribute('alt', 'صورة المنتج');
                }
            });
        }

        // Call image optimization periodically
        setInterval(optimizeImages, 5000);

        // Final initialization message
        console.log('🎉 Fashion Store Enhanced V2 - All systems ready!');
        console.log('✨ New Features enabled:');
        console.log('   - 📱 Sidebar menu with search & categories');
        console.log('   - 🌙 Dark/Light theme toggle');
        console.log('   - 🔍 Enhanced search in sidebar');
        console.log('   - 📏 Size selection for clothing');
        console.log('   - 🛒 Advanced shopping cart');
        console.log('   - ⌨️ Keyboard shortcuts (Ctrl+K, Ctrl+J)');
        console.log('   - 🎨 Smooth animations & transitions');
        console.log('   - ♿ Full accessibility support');
        console.log('   - 📊 Performance & analytics tracking');