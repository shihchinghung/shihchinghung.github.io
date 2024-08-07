const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// 檢查option參數的值
const option = urlParams.get('option');
if (option === '1') {
    const slider = document.getElementById('slider');
    const images = [
        'assets/img/portfolio/portfolio-1.jpg',
        'assets/img/portfolio/portfolio-details-1_2.jpg',
        'assets/img/portfolio/portfolio-details-1_3.jpg',
        'assets/img/portfolio/portfolio-details-1_4.jpg',
        'assets/img/portfolio/portfolio-details-1_5.jpg'
    ];

    images.forEach(image => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<img src="${image}" alt="">`;
        slider.appendChild(slide);
    });

    // 動態生成相應的資訊
    const portfolioContainer = document.createElement('div');
    portfolioContainer.classList.add('col-lg-4');

    const portfolioInfo = document.createElement('div');
    portfolioInfo.classList.add('portfolio-info');
    portfolioInfo.innerHTML = `
        <h4>Intelligent Toilet - AI Detection Combined With Notification System</h4>
        <ul>
            <li><strong>Professor</strong>: 張哲維</li>
            <li><strong>Student</strong>: 洪詩晴、盧于璇、吳冠諭、趙君熙</li>
            <li><strong>Introduction Video</strong>: <a href="https://youtu.be/HLnQyVk6eM4?si=DZ3m5Ya6BhPRcrC7" target="_blank">Demo</a></li>
            <li><strong>Award</strong>: <br>友達AIoT智慧場域與ESG應用 卓越組 第一名 <a href="assets/img/portfolio/innoserve_auo.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="第28屆大專院校資訊應用服務創新競賽 友達AIoT智慧場域與ESG應用 卓越組 第一名"><i class="bx bx-plus"></i></a>
                <br>資訊應用組 佳作 <a href="assets/img/portfolio/innoserve_ip.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="第28屆大專院校資訊應用服務創新競賽 資訊應用組 佳作"><i class="bx bx-plus"></i></a></li>
            <li><strong>Date</strong>: 04 Nov, 2023</li>
        </ul>
    `;
    portfolioContainer.appendChild(portfolioInfo);

    const portfolioDescription = document.createElement('div');
    portfolioDescription.classList.add('portfolio-description');
    portfolioDescription.innerHTML = `
        <h4>智慧廁所 - AI偵測結合自動通報系統</h4>
        <p>
            公共廁所的建立越來越普遍，帶來便利性的同時，安全與衛生的問題也隨之出現。為此，我們研究提升公廁使用環境的系統。本系統旨在透過自動化的感測設施，
            即時監測與通報廁間的異常情況，包括菸味、異味、衛生紙剩餘量、廁間佔用時間、燈光異常和積水的偵測功能，為管理者提高管理效率，更好地維持公廁的使用環境。
        </p>
    `;
    portfolioContainer.appendChild(portfolioDescription);
    document.querySelector('.row').appendChild(portfolioContainer);
} else if (option === '2'){
    const slider = document.getElementById('slider');
    const images = [
        'assets/img/portfolio/portfolio-2.jpg',
        'assets/img/portfolio/portfolio-details-2_2.jpg'
    ];

    images.forEach(image => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<img src="${image}" alt="">`;
        slider.appendChild(slide);
    });

    const portfolioContainer = document.createElement('div');
    portfolioContainer.classList.add('col-lg-4');

    const portfolioInfo = document.createElement('div');
    portfolioInfo.classList.add('portfolio-info');
    portfolioInfo.innerHTML = `
        <h4>ABRSM</h4>
        <ul>
            <li><strong>Teacher</strong>: Hsing-Ju, Tsai</li>
            <li><strong>Student</strong>: Shih-Ching, Hung</li>
            <li><strong>Piano Performance</strong>: Grade 8 (2021) <a href="assets/img/portfolio/grade8.png" class="portfolio-lightbox" title="ABRSM<br>- Grade 8 Piano Performance"><i class="bx bx-plus"></i></a></li>
            <li><strong>Music Theory</strong>: Grade 5 (2018) <a href="assets/img/portfolio/grade5.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="ABRSM<br>- Grade 5 Music Theory"><i class="bx bx-plus"></i></a></li>
        </ul>
    `;
    portfolioContainer.appendChild(portfolioInfo);

    const portfolioDescription = document.createElement('div');
    portfolioDescription.classList.add('portfolio-description');
    portfolioDescription.innerHTML = `
        <h4>Grade 8 Piano Performance</h4>
        <ul>
            <li><strong>D. Scarlatti</strong>: Sonata in D, Kp. 214, L. 165</li>
            <li><strong>Schubert</strong>: Allegro moderato (1st movt from Sonata in E, D. 459)</li>
            <li><strong>Chopin</strong>: Nocturne in G minor, Op. 37 No.1</li>
            <li><strong>Beethoven</strong>: Rondo from Sonata No. 8 Op.13</li>
        </ul>
    `;
    portfolioContainer.appendChild(portfolioDescription);
    document.querySelector('.row').appendChild(portfolioContainer);
} else if (option === '3'){
    const slider = document.getElementById('slider');
    const images = [
        'assets/img/portfolio/portfolio-details-3_2.jpg',
        'assets/img/portfolio/portfolio-details-3_3.jpg',
        'assets/img/portfolio/portfolio-details-3_4.jpg',
        'assets/img/portfolio/portfolio-details-3_5.jpg',
        'assets/img/portfolio/portfolio-details-3_6.jpg',
        'assets/img/portfolio/portfolio-details-3_7.jpg',
        'assets/img/portfolio/portfolio-details-3_8.jpg',
        'assets/img/portfolio/portfolio-details-3_9.jpg'
    ];

    images.forEach(image => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<img src="${image}" alt="">`;
        slider.appendChild(slide);
    });

    const portfolioContainer = document.createElement('div');
    portfolioContainer.classList.add('col-lg-4');

    const portfolioInfo = document.createElement('div');
    portfolioInfo.classList.add('portfolio-info');
    portfolioInfo.innerHTML = `
        <h4>Intelligent Toilet - AI Detection Combined With Notification System</h4>
        <ul>
            <li><strong>Professor</strong>: 張哲維</li>
            <li><strong>Student</strong>: 洪詩晴、盧于璇、吳冠諭、趙君熙</li>
            <li><strong>Introduction Video</strong>: <a href="https://youtu.be/HLnQyVk6eM4?si=DZ3m5Ya6BhPRcrC7" target="_blank">Demo</a></li>
            <li><strong>Award</strong>: <br>永續科技組 第一名 <a href="assets/img/portfolio/aiot_1st_en.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="第7屆創創AIoT競賽 永續科技組 第一名"><i class="bx bx-plus"></i></a>
                <a href="assets/img/portfolio/aiot_1st.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="第7屆創創AIoT競賽 永續科技組 第一名"></a>
                <br>貿澤電子 企業獎 <a href="assets/img/portfolio/aiot_enterprise_en.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="第7屆創創AIoT競賽 永續科技組 貿澤電子 企業獎"><i class="bx bx-plus"></i></a>
                <a href="assets/img/portfolio/aiot_enterprise.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="第7屆創創AIoT競賽 永續科技組 貿澤電子 企業獎"></a></li>
            <li><strong>Date</strong>: 13 Jul, 2023</li>
        </ul>
    `;
    portfolioContainer.appendChild(portfolioInfo);

    const portfolioDescription = document.createElement('div');
    portfolioDescription.classList.add('portfolio-description');
    portfolioDescription.innerHTML = `
        <h4>智慧廁所 - AI偵測結合自動通報系統</h4>
        <p>
            公共廁所的建立越來越普遍，帶來便利性的同時，安全與衛生的問題也隨之出現。為此，我們研究提升公廁使用環境的系統。本系統旨在透過自動化的感測設施，
            即時監測與通報廁間的異常情況，包括菸味、異味、衛生紙剩餘量、廁間佔用時間、燈光異常和積水的偵測功能，為管理者提高管理效率，更好地維持公廁的使用環境。
        </p>
    `;
    portfolioContainer.appendChild(portfolioDescription);
    document.querySelector('.row').appendChild(portfolioContainer);   
} else if (option === '4'){
    const slider = document.getElementById('slider');
    const images = [
        'assets/img/portfolio/portfolio-details-4_2.jpg',
        'assets/img/portfolio/portfolio-details-4_3.jpg',
        'assets/img/portfolio/portfolio-details-4_4.jpg',
        'assets/img/portfolio/portfolio-details-4_5.jpg',
        'assets/img/portfolio/portfolio-details-4_6.jpg',
        'assets/img/portfolio/portfolio-details-4_7.jpg',
        'assets/img/portfolio/portfolio-details-4_8.jpg'
    ];

    images.forEach(image => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<img src="${image}" alt="">`;
        slider.appendChild(slide);
    });

    const portfolioContainer = document.createElement('div');
    portfolioContainer.classList.add('col-lg-4');

    const portfolioInfo = document.createElement('div');
    portfolioInfo.classList.add('portfolio-info');
    portfolioInfo.innerHTML = `
        <h4>HK Trip 🇭🇰</h4>
        <ul>
            <li><strong>Period</strong>: 23 Jul - 18 Aug, 2023</li>
        </ul>
    `;
    portfolioContainer.appendChild(portfolioInfo);
} else if (option === '6'){
    const slider = document.getElementById('slider');
    const images = [
        'assets/img/portfolio/portfolio-details-6_2.jpg',
        'assets/img/portfolio/portfolio-details-6_3.jpg',
        'assets/img/portfolio/portfolio-details-6_4.jpg',
        'assets/img/portfolio/portfolio-details-6_5.jpg',
        'assets/img/portfolio/portfolio-details-6_6.jpg',
        'assets/img/portfolio/portfolio-details-6_7.jpg'
    ];

    images.forEach(image => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<img src="${image}" alt="">`;
        slider.appendChild(slide);
    });

    const portfolioContainer = document.createElement('div');
    portfolioContainer.classList.add('col-lg-4');

    const portfolioInfo = document.createElement('div');
    portfolioInfo.classList.add('portfolio-info');
    portfolioInfo.innerHTML = `
        <h4>大園國際高中畢業典禮</h4>
        <ul>
            <li><strong>Date</strong>: 15 Jun, 2020</li>
        </ul>
    `;
    portfolioContainer.appendChild(portfolioInfo);
} else if (option === '9'){
    const slider = document.getElementById('slider');
    const images = [
        'assets/img/portfolio/portfolio-details-9_2.jpg',
        'assets/img/portfolio/portfolio-details-9_3.jpg',
        'assets/img/portfolio/portfolio-details-9_4.jpg',
        'assets/img/portfolio/portfolio-details-9_5.jpg',
        'assets/img/portfolio/portfolio-details-9_6.jpg'
    ];

    images.forEach(image => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<img src="${image}" alt="">`;
        slider.appendChild(slide);
    });

    const portfolioContainer = document.createElement('div');
    portfolioContainer.classList.add('col-lg-4');

    const portfolioInfo = document.createElement('div');
    portfolioInfo.classList.add('portfolio-info');
    portfolioInfo.innerHTML = `
        <h4>Hiking ⛰️</h4>
        <ul>
            <li><strong>📍 牛頭山</strong></li>
            <li><strong>📍 五酒桶山</strong></li>
            <li><strong>📍 羊稠森林步道</strong></li>
            <li><strong>📍 林美石磬步道</strong></li>
            <li><strong>📍 虎頭山</strong></li>
        </ul>
    `;
    portfolioContainer.appendChild(portfolioInfo);
}