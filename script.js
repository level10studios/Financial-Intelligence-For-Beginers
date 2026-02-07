const translations = {
    es: {
        heroTitle: "Inteligencia Financiera para Principiantes",
        heroSubtitle: "Contenido exclusivo para lectores",
        thankYouMsg: "Gracias por adquirir el libro. Aquí encontrarás las herramientas mencionadas para llevar tu control financiero al siguiente nivel.",
        downloadsTitle: "Descargas Exclusivas",
        excelLabel: "Formato Registro de Gastos (Excel / Sheets)",
        excelDesc: "Compatible con Microsoft Excel y Google Sheets.",
        excelBtn: "Descargar EXCEL",
        numbersLabel: "Formato Registro de Gastos (.NUMBERS)",
        numbersDesc: "Optimizado para usuarios de Apple Numbers.",
        numbersBtn: "Descargar .NUMBERS",
        footerRights: "Todos los derechos reservados.",
        excelLink: "https://docs.google.com/spreadsheets/d/1CXnhcSexJP9m2NjJXYp29kRjzNgfXBi3/edit?usp=sharing&ouid=107881861004850244031&rtpof=true&sd=true",
        numbersLink: "https://drive.google.com/file/d/10q8w8GvKJEvUNedvhfZKtMVYGq9329hg/view?usp=sharing"
    },
    en: {
        heroTitle: "Financial Intelligence for Beginners",
        heroSubtitle: "Exclusive content for readers",
        thankYouMsg: "Thank you for purchasing the book. Here you will find the tools mentioned to take your financial control to the next level.",
        downloadsTitle: "Exclusive Downloads",
        excelLabel: "Expense Tracking Format (Excel / Sheets)",
        excelDesc: "Compatible with Microsoft Excel and Google Sheets.",
        excelBtn: "Download EXCEL",
        numbersLabel: "Expense Tracking Format (.NUMBERS)",
        numbersDesc: "Optimized for Apple Numbers users.",
        numbersBtn: "Download .NUMBERS",
        footerRights: "All rights reserved.",
        excelLink: "https://docs.google.com/spreadsheets/d/1SAI33aEubke92rOabeIDXpzzuR3iTj4f/edit?usp=sharing&ouid=107881861004850244031&rtpof=true&sd=true",
        numbersLink: "https://drive.google.com/file/d/1bBYGqtApCg8GTFjq3UwVoaqmOHryvjPu/view?usp=sharing"
    }
};

const langEsBtn = document.getElementById('lang-es');
const langEnBtn = document.getElementById('lang-en');

function updateContent(lang) {
    const t = translations[lang];
    
    document.getElementById('hero-title').textContent = t.heroTitle;
    document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
    document.getElementById('thank-you-msg').textContent = t.thankYouMsg;
    document.getElementById('downloads-title').textContent = t.downloadsTitle;
    document.getElementById('excel-label').textContent = t.excelLabel;
    document.getElementById('excel-desc').textContent = t.excelDesc;
    document.getElementById('excel-link').textContent = t.excelBtn;
    document.getElementById('excel-link').href = t.excelLink;
    document.getElementById('numbers-label').textContent = t.numbersLabel;
    document.getElementById('numbers-desc').textContent = t.numbersDesc;
    document.getElementById('numbers-link').textContent = t.numbersBtn;
    document.getElementById('numbers-link').href = t.numbersLink;
    document.getElementById('footer-rights').textContent = t.footerRights;

    // Update active button
    if (lang === 'es') {
        langEsBtn.classList.add('active');
        langEnBtn.classList.remove('active');
        document.documentElement.lang = 'es';
    } else {
        langEnBtn.classList.add('active');
        langEsBtn.classList.remove('active');
        document.documentElement.lang = 'en';
    }
}

langEsBtn.addEventListener('click', () => updateContent('es'));
langEnBtn.addEventListener('click', () => updateContent('en'));

// Initialize with Spanish as default (since it was the primary language in the original site root)
updateContent('es');

// 3D Tilt Effect for Book Card (Simplified)
const card = document.querySelector('.book-card');
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 968) return;
    
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

document.addEventListener('mouseleave', () => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
