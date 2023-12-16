function getBgColor() {
    let ans = '#';
    for (let i = 0; i < 6; i++) {
        let a = Math.floor(Math.random() * 16);
        let b = a.toString(16);
        ans += b;
    }
    return ans;
}
let start = document.querySelector('#b1');
let inter = null;
start.addEventListener('click', () => {
    if (!inter) {
        inter = setInterval(() => {
            document.body.style.backgroundColor = getBgColor();
        }, 1000);
    }
});

let stop = document.querySelector('#b2');
stop.addEventListener('click', () => {
    clearInterval(inter);
    inter = null;
});