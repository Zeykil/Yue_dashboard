// Efeito de aparecer ao rolar
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Adiciona a classe ao aparecer
        } else {
            entry.target.classList.remove('visible'); // Remove a classe ao sumir
        }
    });
}, { threshold: 0.3 }); // Quando 30% da seção estiver visível

sections.forEach(section => {
    observer.observe(section);
});

// Efeito de cabeçalho ao rolar
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 50) {
        // Rolando para baixo
        header.classList.add('hidden'); // Esconde o cabeçalho
    } else {
        // Rolando para cima
        header.classList.remove('hidden'); // Mostra o cabeçalho
    }

    if (currentScroll > 50) {
        header.classList.add('scrolled'); // Aplica estilos ao rolar
    } else {
        header.classList.remove('scrolled'); // Remove estilos ao rolar
    }

    lastScroll = currentScroll;
});

// Adicionando emojis dinamicamente (opcional)
const titles = document.querySelectorAll('h1, h2, h3');

titles.forEach(title => {
    // Verifica se o título já contém um emoji
    if (!title.innerHTML.includes("📜") && !title.innerHTML.includes("🔒") && 
        !title.innerHTML.includes("🛠️") && !title.innerHTML.includes("📚") && 
        !title.innerHTML.includes("⚠️") && !title.innerHTML.includes("🔄") && 
        !title.innerHTML.includes("📋") && !title.innerHTML.includes("🔗") && 
        !title.innerHTML.includes("🔐")) {
        
        // Adiciona emojis apenas se ainda não estiverem presentes
        if (title.textContent.includes("Termos de Serviço")) {
            title.innerHTML = title.innerHTML.replace("Termos de Serviço", "Termos de Serviço 📜");
        }
        if (title.textContent.includes("Política de Privacidade")) {
            title.innerHTML = title.innerHTML.replace("Política de Privacidade", "Política de Privacidade 🔒");
        }
        if (title.textContent.includes("Uso do Serviço")) {
            title.innerHTML = title.innerHTML.replace("Uso do Serviço", "Uso do Serviço 🛠️");
        }
        if (title.textContent.includes("Propriedade Intelectual")) {
            title.innerHTML = title.innerHTML.replace("Propriedade Intelectual", "Propriedade Intelectual 📚");
        }
        if (title.textContent.includes("Limitação de Responsabilidade")) {
            title.innerHTML = title.innerHTML.replace("Limitação de Responsabilidade", "Limitação de Responsabilidade ⚠️");
        }
        if (title.textContent.includes("Alterações nos Termos")) {
            title.innerHTML = title.innerHTML.replace("Alterações nos Termos", "Alterações nos Termos 🔄");
        }
        if (title.textContent.includes("Informações Coletadas")) {
            title.innerHTML = title.innerHTML.replace("Informações Coletadas", "Informações Coletadas 📋");
        }
        if (title.textContent.includes("Uso das Informações")) {
            title.innerHTML = title.innerHTML.replace("Uso das Informações", "Uso das Informações 🛠️");
        }
        if (title.textContent.includes("Compartilhamento de Informações")) {
            title.innerHTML = title.innerHTML.replace("Compartilhamento de Informações", "Compartilhamento de Informações 🔗");
        }
        if (title.textContent.includes("Segurança")) {
            title.innerHTML = title.innerHTML.replace("Segurança", "Segurança 🔐");
        }
    }
});