// ========================================
// نظام تسجيل الدخول والخروج - Navbar
// ========================================

// Toggle User Dropdown
function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const userInfo = document.getElementById('userInfo');
    const dropdown = document.getElementById('userDropdown');
    
    if (userInfo && dropdown && !userInfo.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

// Logout function
function logout() {
    localStorage.removeItem('programmali_user_data');
    window.location.href = 'index.html';
}

// Update user info in navbar
function updateUserInfo() {
    const STORAGE_KEY = 'programmali_user_data';
    const userData = localStorage.getItem(STORAGE_KEY);
    const userInfoDiv = document.getElementById('userInfo');
    const loginBtn = document.getElementById('loginBtn');
    
    if (!userInfoDiv || !loginBtn) return;
    
    if (userData) {
        const user = JSON.parse(userData);
        userInfoDiv.style.display = 'flex';
        loginBtn.style.display = 'none';
        
        const userNameSpan = document.getElementById('userName');
        const userPointsSpan = document.getElementById('userPoints');
        
        if (userNameSpan) userNameSpan.textContent = user.name;
        if (userPointsSpan) userPointsSpan.textContent = user.points || 0;
    } else {
        userInfoDiv.style.display = 'none';
        loginBtn.style.display = 'inline-block';
    }
}

// Call on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateUserInfo);
} else {
    updateUserInfo();
}
