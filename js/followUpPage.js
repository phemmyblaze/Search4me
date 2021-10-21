const updatesSection = document.getElementById("updates")
const editSection = document.getElementById("edit-modal")
const updatesNumber = document.getElementById("update-number")
const imgUpload = document.getElementById("imgInp")
const fReader = new FileReader();
const updateButton = document.getElementById("update-button");
const messageInfo = document.getElementById("message-info")
const submitUpdate = document.getElementById("submit-update")
const imgPreviewPanel = document.getElementById("img-preview-panel")

let html = ""
let imgPreviewHtml = ""
let imgUploadArray = []


let updates = [
    {
        message: "Yvonne Rawlins 17, went missing from her home in Juneau area of Southeast Alaska, on 21, August. The student was last seen strolling around a park near Tongass National Forest, in Alaska, two weeks ago. A reliable source said her Sister had complained about the way her reports were treated initially.",
        images: ["../images/person 1.png", "../images/person 2.png"],
        time: "4:20 PM",
        date: "20-06-2021",
        dateEdited: ''
    },
    {
        message: "Yvonne Rawlins 17, went missing from her home in Juneau area of Southeast Alaska, on 21, August. The student was last seen strolling around a park near Tongass National Forest, in Alaska, two weeks ago. A reliable source said her Sister had complained about the way her reports were treated initially.",
        images: ["../images/person 3.png"],
        time: "4:20 PM",
        date: "20-06-2021",
        dateEdited: ''
    },
    {
        message: "Yvonne Rawlins 17, went missing from her home in Juneau area of Southeast Alaska, on 21, August. The student was last seen strolling around a park near Tongass National Forest, in Alaska, two weeks ago. A reliable source said her Sister had complained about the way her reports were treated initially.",
        images: [],
        time: "4:20 PM",
        date: "20-06-2021",
        dateEdited: ''
    }
]




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
        generatedHTML = generatedHTML + `<img class="update-images m-2" src="${image}">`
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






submitUpdate.addEventListener("click", () => {

    if (messageInfo.value == "") {
        alert("Update cannot be empty")
    } else {
        let submitObject = {
            message: messageInfo.value,
            images: imgUploadArray,
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true}).toUpperCase(),
            date: new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-'),
            dateEdited: ''
        }
    
        messageInfo.value = ""
        imgUploadArray = []
        imgPreviewHtml = ""
        imgPreviewPanel.innerHTML = imgPreviewHtml
    
        updates.unshift(submitObject)
        updatesNumber.textContent = updates.length
        displayHTML()
    }

})






imgUpload.addEventListener('input', (e) => {
    console.log(e.target.files[0])
    fReader.readAsDataURL(e.target.files[0]);
fReader.onloadend = function(event){
    console.log(event.target.result)
    imgPreviewHtml += `
    <img class="update-images m-2" width="149px" height="168px" src=${event.target.result} />
    `
    imgUploadArray.push(event.target.result)

    imgPreviewPanel.innerHTML = imgPreviewHtml
}
})


function displayHTML() {
    html = ""
    updates.forEach( (e, index) => {
        html +=`
        <div class="p-3 m-3 update-info">
            <div class="d-flex justify-content-between">
                ${index == 0? "<h5>Latest Update!</h5>": "<h5>Previous Update!</h5>"}
                <p><button class="edit">Edit</button><button class="delete">Delete</button></p>
            </div>
            <div class="update-info p-4 inner-box text-center">
                <p>${e.message}</p>
                ${generateImageURL(e.images)}
            </div>
            <div class="row updates-details">
                <div class="col-4 p-4">
                    <img class="" src="../images/police logo.png"/>
                </div>
                <div class="col-8 p-4">
                        <p>Updated by Inspector Buhari Jubril</p>
                        <p>Agency: Nigeria Police Force; Lagos State Police Command.</p>
                        <p>Time: ${e.time}</p>
                        <p>Date: ${e.date}</p>
                        ${e.dateEdited?  `<p>Edited On ${e.dateEdited}</p>`: ``}
                </div>
            </div>
        </div>
        `
    })
    updatesSection.innerHTML = html
    updatesNumber.textContent = updates.length
    deleteButton()
    editButton()
}


function deleteButton() {
    let deleteBtn = document.querySelectorAll('.delete')
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', () => {
           updates.splice(i, 1)
           html = ""
           displayHTML()
        })
        
    }
}

function editButton() {
    editHtml = ""
    let editBtn = document.querySelectorAll('.edit')
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click', () => {
            editSection.style.display = "block"
            let editArray = updates[i]
            editHtml += `
                <div class="edit-update-box p-4" data-updateNo=${i}>
                    <h5 class="mb-4">Edit Update</h5>
                    <textarea id="edit-update-info" class="w-100 p-3"  rows="4" required></textarea>
                    <p class="text-end mt-4"><button id="edit-update-button">Edit</button><button id="close-update-button">Close</button></p>
                    </div>
            `
            editSection.innerHTML = editHtml
            let editUpdateInfo = document.getElementById("edit-update-info")
            let editModalButton = document.getElementById("edit-update-button")
            let closeModalButton = document.getElementById("close-update-button")
            
            editModalButton.addEventListener('click', () => {
                console.log(i)
                updates[i].message = editUpdateInfo.value
                updates[i].dateEdited = `${new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-')} at ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true}).toUpperCase()}`
                editSection.style.display = "none"
                displayHTML()

            })


            closeModalButton.addEventListener('click', () => {
                editSection.style.display = "none"
                displayHTML()
            })

            editUpdateInfo.value = editArray.message

        })
    }
}

displayHTML()