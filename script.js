let modalQtd = 1;

const dqs = (el) => document.querySelector(el);
const dqsa = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
    // Clona estrutura HTML
    let pizzaItem = dqs('.models .pizza-item').cloneNode(true);

    // Seta atributo
    pizzaItem.setAttribute('data-key', index);

    // Substitui conteúdo do template
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        // Interrompe ação padrão da tag a
        e.preventDefault();

        // Procura o pizza-item mais próximo à tag a
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQtd = 1;

        // Preenche informações do modal
        dqs('.pizzaBig img').src = pizzaJson[key].img;
        dqs('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        dqs('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        dqs('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

        // Remove seleção ativa do tamanho
        dqs('.pizzaInfo--size.selected').classList.remove('selected');

        dqsa('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2){
                size.classList.add('selected');
            }
            
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })

        dqs('.pizzaInfo--qt').innerHTML = modalQtd;

        // Transição ao abrir modal
        dqs('.pizzaWindowArea').style.opacity = 0;
        dqs('.pizzaWindowArea').style.display = 'flex';

        setTimeout(() => {
            dqs('.pizzaWindowArea').style.opacity = 1;
        }, 200)
    })

    // Aplica informações em pizza-item
    dqs('.pizza-area').append(pizzaItem);
});