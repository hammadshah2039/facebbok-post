// post functionality
let post = document.querySelector("#POST");
let apost = document.querySelector("#adpost");
let text = document.querySelector("#text");
let iconimg = document.querySelector("#imgicon");
let imgfile = document.querySelector("#fileInput");
let subpost = document.querySelector("#subpost");
let btnpost = document.querySelector("#btnpost");





let imgp = "";


let creatpost = () => {
    apost.style.display = "block";

    let cross = document.querySelector("#crossbtn");

    cross.addEventListener("click", () => {
        apost.innerHTML = "";
    });
};

post.addEventListener("click", creatpost);


// Image icon click
let imgpost = () => {
    imgfile.click();
};

iconimg.addEventListener("click", imgpost);


// Image select
let img = () => {

    let file = imgfile.files[0];

    if (file) {

        // File ko URL me convert karo
        imgp = URL.createObjectURL(file);

    
    }

};

imgfile.addEventListener("change", img);


// Submit Post
let submitpost = () => {

    if (!text.value.trim() && !imgp) {

        Swal.fire("Please add text or image!");
        return;
    }

    subpost.innerHTML = `
    
    <div class="card post">

        <div class="post-header">

            <img src="${imgp}" alt="User" class="user-avatar">

            <div class="post-user-info">
                <h5>Hammad Shah </h5>
                <span>1 hr ago · <i class="fa-solid fa-earth-americas"></i></span>
            </div>

            <div class="post-opt">
                <i class="fa-solid fa-ellipsis"></i>
            </div>

        </div>

        <div class="post-content">
            <p>${text.value}</p>
        </div>

        ${
            imgp
                ? `
        <div class="post-media">
            <img src="${imgp}" id="postimage">
        </div>
        `
                : ""
        }

        <div class="post-stats">

            <div class="likes-count">
                <i class="fa-solid fa-thumbs-up icon-like"></i>
                <i class="fa-solid fa-heart icon-heart"></i>
                <span>John Doe and 42 others</span>
            </div>

            <div class="comments-count">
                12 comments
            </div>

        </div>

        <hr class="card-divider">

        <div class="post-interactions">

            <div class="interact-btn">
                <i class="fa-regular fa-thumbs-up"></i> Like
            </div>

            <div class="interact-btn">
                <i class="fa-regular fa-comment"></i> Comment
            </div>

            <div class="interact-btn">
                <i class="fa-regular fa-share-from-square"></i> Share
            </div>

        </div>

    </div>
    `;

setTimeout(() => {
    apost.style.display = "none";
    apost.innerHTML = "";
}, 1000); 
    
};

btnpost.addEventListener("click", submitpost);