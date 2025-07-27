// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    console.log('PLOTTRON Comic Site loaded!');
    
    // ロゴクリックイベント
    const logo = document.querySelector('.plottron-logo');
    if (logo) {
        logo.addEventListener('click', function() {
            console.log('PLOTTRON logo clicked!');
            // ここにロゴクリック時の処理を追加
        });
    }
    
    // 画像の遅延読み込み
    const images = document.querySelectorAll('.hero-image');
    images.forEach((img, index) => {
        img.addEventListener('load', function() {
            console.log(`Hero image ${index + 1} loaded`);
        });
        
        img.addEventListener('error', function() {
            console.error(`Failed to load hero image ${index + 1}`);
        });
    });
    
    // スクロールアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Hero画像にアニメーションを適用
    const heroItems = document.querySelectorAll('.hero-item');
    heroItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
    
    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// パフォーマンス監視
window.addEventListener('load', function() {
    // ページ読み込み時間を計測
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    
    // 画像読み込み状況を確認
    const totalImages = document.querySelectorAll('img').length;
    const loadedImages = Array.from(document.querySelectorAll('img')).filter(img => img.complete).length;
    console.log(`Images loaded: ${loadedImages}/${totalImages}`);
}); 