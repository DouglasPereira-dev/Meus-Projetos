// Seleciona todas as perguntas
const faqQuestions = document.querySelectorAll('.faq-question');

// Adiciona um evento de clique a cada pergunta
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Alterna a exibição da resposta correspondente
        const answer = question.nextElementSibling; // Seleciona a resposta que está logo após a pergunta
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
