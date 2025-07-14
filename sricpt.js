document.addEventListener('DOMContentLoaded', function() {
    // Alert ketika form dikirim
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pendaftaran berhasil dikirim!');
        form.reset();
    });

    // Efek hover untuk card
    const cards = document.querySelectorAll('.list-group-item');
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.02)';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});