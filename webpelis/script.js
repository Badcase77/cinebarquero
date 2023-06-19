let loadMoreBtn1 = document.querySelector('#load-more-1');
let curretItem1 = 5,

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-1 .box-1'
    )];
    for (var i = curretItem1; i < curretItem1 + 5; i++) {
        boxes[i] .style .display = 'inline-block';
    }
    currentItem1 += 5;
    if (curretItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none'
    }
}
let loadMoreBtn2 = document.querySelector('#load-more-2');
let curretItem1 = 5,

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-2 .box-2'
    )];
    for (var i = curretItem2; i < curretItem2 + 5; i++) {
        boxes[i] .style .display = 'inline-block';
    }
    currentItem2 += 5;
    if (curretItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none'
    }
}
let loadMoreBtn1 = document.querySelector('#load-more-1');
let curretItem1 = 5,

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-3 .box-3'
    )];
    for (var i = curretItem3; i < curretItem3 + 5; i++) {
        boxes[i] .style .display = 'inline-block';
    }
    currentItem3 += 5;
    if (curretItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none'
    }
}
