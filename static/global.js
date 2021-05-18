// // 图片是否已被设置
// let set = false;

// function loadPcImage() {
//     // 获取屏幕宽度
//     let width = document.body.clientWidth;
//     // 获取pc的img标签
//     let pcClassTagArr = document.getElementsByClassName('pc')
//         // 如果移动端，则把pc端图片src全部设置为空
//     if (width > 768 && !set) {
//         pcClassTagArr.forEach((item) => {
//             let imgTagArr = item.getElementsByTagName('img');
//             for (let i = 0; i < imgTagArr.length; i++) {
//                 let dataSrc = imgTagArr[i].getAttribute('data-src');
//                 if (dataSrc !== null) {
//                     imgTagArr[i].src = dataSrc;
//                 }
//             }
//         })
//         set = true;
//     }
// }

// // 节流函数
// function throttle(fn, delay) {
//     let valid = true;
//     return function(...args) {
//         if (!valid) {
//             return false;
//         }
//         // 工作时间，执行函数并且在间隔期内把状态位设为无效
//         valid = false;
//         setTimeout(() => {
//             fn(...args);
//             valid = true;
//         }, delay);
//     };
// }

// window.onload = function() {
//     loadPcImage();
// }

// window.onresize = function() {
//     throttle(loadPcImage, 1000);
// }