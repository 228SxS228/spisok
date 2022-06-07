const btn = document.getElementById("btn");
const slct = document.getElementById("slct");
const xhr = new XMLHttpRequest();
const url = "http://localhost:5050/data.json";

btn.addEventListener("click", function () {
    const listOptions = ["JS", "HTML", "CSS"];
    const listSelects = [];
    listSelects.push(slct);
    slct.id = `select_${listSelects.length}`;
    slct.name = `selectName`;

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send();
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            // let listOptions = JSON.parse(xhr.response);
            for (let i = 0; i < listOptions.length; i++) {
                const option = document.createElement("option");
                option.value = listOptions[i];
                option.text = listOptions[i];
                slct.add(option);
            }
        } else {
            console.error("err");
        }
    });
});

// btn.addEventListener("click", function () {
//     const listOptions = ["JS", "HTML", "CSS"];
//     const listSelects = [];
//     listSelects.push(slct);
//     slct.id = `select_${listSelects.length}`;
//     slct.name = `selectName`;

//     fetch(url)
//         .then(res => res.json())
//         .then(listOptions => {
//             console.log(listOptions)
//             for (let i = 0; i < listOptions.length; i++) {
//                 const option = document.createElement("option");
//                 option.value = listOptions[i];
//                 option.text = listOptions[i];
//                 slct.add(option);
//             }
//         })
// });
