const addBtn = document.querySelector('.add_nft');
const containerOfNft = document.querySelector('.container_nft');

let nftInBlock = [];

addBtn.addEventListener('click',() => {
    nftCreate();
    cardsRender();
});

function cardsRender () {

    let result = '';

    for (let i = 0; i < nftInBlock.length; i++) {
        result += `<div class='card_nft'>
<div class='delete card_nft'>
<button class='btn_basket' onclick='deleteNft(${nftInBlock[i].id})' type='button'>
<img src='../img/basket.png' alt='png'>
</button>
</div>
<div class='nft_continuance'>
<div class='name'>${nftInBlock[i].name}</div>
<img src='${nftInBlock[i].link}' alt='link'>
<div class="description">${nftInBlock[i].description}</div>
</div>
</div>`
    }
    console.log(result);
    containerOfNft.innerHTML = result;
}

function getRandomeBlock() {

    const name = ['NFT', 'NFT Card', 'Card NFT', 'Card'];
    const description = ['Rare NFT', 'Gold NFT', 'Legendary NFT', 'Just NFT', 'Unnecessary NFT'];

    return {
        name: name[Math.floor(Math.random() * name.length - 1) + 1],
        description: description[Math.floor(Math.random() * name.length - 1) + 1],
        id: getRandomId(),
        link: 'https://random.imagecdn.app/500/500',
    }
}

function deleteNft(id) {

    nftInBlock = nftInBlock.filter((el) => el.id !== id)
    cardsRender();
}

function getRandomId() {
    return Math.floor(Math.random() * 100);
}

function nftCreate() {
    nftInBlock.push(getRandomeBlock());
}

