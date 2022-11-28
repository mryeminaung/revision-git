const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve('some data');
        reject('some error');
    });
};

// getSomething().then(
//     data => {
//         console.log(data);
//     },
//     err => {
//         console.log(err);
//     }
// );

// getSomething()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// fetch api

fetch('./datas.json')
    .then(res => console.log('response : ', res))
    // .catch(error => console.log('error : ', error));
// .then(data => console.log(data));
