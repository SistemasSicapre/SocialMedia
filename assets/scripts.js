document.addEventListener('DOMContentLoaded', () => {
    const socialLinksList = document.getElementById('socialLinks');

    // Enlaces de redes sociales
    const socialLinks = [
        { name: 'Página Web', url: 'https://sicapre.com/', icon: 'fas fa-globe' },
        { name: 'Facebook', url: 'https://www.facebook.com/sicapremex?locale=es_LA', icon: 'fab fa-facebook-f' },
        { name: 'Instagram', url: 'https://www.instagram.com/sicapremex/', icon: 'fab fa-instagram' },
        { name: 'Twitter', url: 'https://x.com/sicapremex', icon: 'fab fa-twitter' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/sicapre-mx/posts/?feedView=all&viewAsMember=true', icon: 'fab fa-linkedin-in' },
        { name: 'Whatsapp 1', url: 'https://wa.me/5214421128559', icon: 'fab fa-whatsapp', isWhatsapp: true },
        { name: 'Whatsapp 2', url: 'https://wa.me/5214461177386', icon: 'fab fa-whatsapp', isWhatsapp: true },
    ];

    // Enlaces cuando se carga la página
    socialLinks.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.target = '_blank';
        
        const icon = document.createElement('i');
        icon.className = link.icon;
        
        anchor.appendChild(icon);
        anchor.appendChild(document.createTextNode(` ${link.name}`)); // Espacio entre ícono y texto
        
        if (link.isWhatsapp) {
            anchor.classList.add('whatsapp-item');
        }

        listItem.appendChild(anchor);
        socialLinksList.appendChild(listItem);
    });

    // Agrupa los íconos de WhatsApp en un contenedor
    const whatsappItems = document.querySelectorAll('.whatsapp-item');
    if (whatsappItems.length) {
        const whatsappContainer = document.createElement('div');
        whatsappContainer.classList.add('whatsapp-container');
        whatsappItems.forEach(item => whatsappContainer.appendChild(item.parentElement));
        socialLinksList.appendChild(whatsappContainer);
    }
});
