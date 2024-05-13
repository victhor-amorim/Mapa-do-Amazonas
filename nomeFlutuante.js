// Selecione o elemento .tooltip
const description = document.querySelector(".tooltip");

// Selecione todos os elementos <path>
document.querySelectorAll('path').forEach((el) => {
    // Adicione um ouvinte de evento para mouseover
    el.addEventListener('mouseover', (event) => {
        event.target.classList.add("enabled");
        description.classList.add("active");
        description.innerHTML = event.target.id;
    });

    // Adicione um ouvinte de evento para mouseout
    el.addEventListener("mouseout", () => {
        event.target.classList.remove("enabled");
        description.classList.remove("active");
    });

    // Adicione um ouvinte de evento para click
    el.addEventListener('click', (event) => {
        // Obtém o link associado ao path
        const href = event.target.getAttribute('href');
        // Verifica se há um link
        if (href) {
            // Abre o link no navegador
            window.location.href = href;
        }
    });
});

// Adicione um ouvinte de evento para mousemove
document.onmousemove = function (e) {
    description.style.left = e.pageX + "px";
    description.style.top = (e.pageY - 100) + "px";
};
