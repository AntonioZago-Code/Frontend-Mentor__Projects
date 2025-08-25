document.addEventListener('DOMContentLoaded', () => {

    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('skills_list');

            data.forEach(item => {
                const li = document.createElement('li');
                li.className = 'skill-item';

                li.innerHTML = `
                    <img src="${item.icon}" alt="${item.category} icon"/>
                    <p class="skill-name">${item.category}</p>
                    <p class="poits-of-100"><span>${item.score}</span> / 100<p>
                `;

                lista.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar o JSON: ', error);
        });
});