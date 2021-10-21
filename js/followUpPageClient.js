let updates = [
    {
        message: "Yvonne Rawlins 17, went missing from her home in Juneau area of Southeast Alaska, on 21, August. The student was last seen strolling around a park near Tongass National Forest, in Alaska, two weeks ago. A reliable source said her Sister had complained about the way her reports were treated initially.",
        images: ["person 1.png", "person 2.png"],
        time: "4:20 PM",
        date: "20-06-2021"
    },
    {
        message: "Yvonne Rawlins 17, went missing from her home in Juneau area of Southeast Alaska, on 21, August. The student was last seen strolling around a park near Tongass National Forest, in Alaska, two weeks ago. A reliable source said her Sister had complained about the way her reports were treated initially.",
        images: ["person 3.png"],
        time: "4:20 PM",
        date: "20-06-2021"
    },
    {
        message: "Yvonne Rawlins 17, went missing from her home in Juneau area of Southeast Alaska, on 21, August. The student was last seen strolling around a park near Tongass National Forest, in Alaska, two weeks ago. A reliable source said her Sister had complained about the way her reports were treated initially.",
        images: [],
        time: "4:20 PM",
        date: "20-06-2021"
    }
]

let updatesSection = document.getElementById("updates")
const updateButton = document.getElementById("update-button");
let html = ""

// let bd= ""





updates.forEach( (e, index) => {
    html +=`
    <div class="p-3 m-3 update-info">
        <div class="d-flex justify-content-between">
            ${index == 0? "<h5>Latest Update!</h5>": "<h5>Previous Update!</h5>"}
        </div>
        <div class="update-info p-4 inner-box text-center">
            <p>${e.message}</p>
            ${generateImageURL(e.images)}
        </div>
        <div class="row updates-details">
            <div class="col-4 p-4">
                <img class="" src="./images/police logo.png"/>
            </div>
            <div class="col-8 p-4">
                    <p>Updated by Inspector Buhari Jubril</p>
                    <p>Agency: Nigeria Police Force; Lagos State Police Command.</p>
                    <p>Time: ${e.time}</p>
                    <p>Date: ${e.date}</p>
            </div>
        </div>
    </div>
    `

    updatesSection.innerHTML = html
})

// let a = document.getElementById("img-section")
// updates.forEach(e => {
//     e.images.forEach((a, index) => {
//         bd += `
//         <img src="../images/${a.img_0}">
//         `
//     })

//     a.innerHTML = bd
// })

function generateImageURL (images) {
    let generatedHTML = ''

    images.forEach(image => {
        generatedHTML = generatedHTML + `<img src="./images/${image}">`
    })

    return generatedHTML
}

updateButton.addEventListener('click', () => {
    if( updatesSection.style.display == "none") {
        updatesSection.style.display = "block";
    } else {
        updatesSection.style.display = "none";
    }
})