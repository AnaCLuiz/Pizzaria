const dqs = (el) => document.querySelector(el);
const dqsa = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
    // Clona estrutura HTML
    let pizzaItem = dqs('.models .pizza-item').cloneNode(true);

    // Substitui conteúdo do template
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        // Interrompe ação padrão da tag a
        e.preventDefault();
        dqs('.pizzaWindowArea').style.opacity = 0;
        dqs('.pizzaWindowArea').style.display = 'flex';
        
        setTimeout(() => {
            dqs('.pizzaWindowArea').style.opacity = 1;
        }, 200)
    })

    // Preenche informações em pizza-item
    dqs('.pizza-area').append(pizzaItem);
});

