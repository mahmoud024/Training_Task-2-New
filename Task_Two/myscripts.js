const cardData = [
    {logoImage: "/images/1.png", companyName: "Photosnap", isNew: true, isFeatured: true, jobTitle:"Senior Frontend Deve", postedTime:"1d", employmentType:"Full Time", location:"UK Only", skills:["Frontend" , "Senior" , "HTML" , "CSS"]},
    {logoImage: "/images/2.png", companyName: "Manage", isNew: true, isFeatured: true, jobTitle:"Fullstack Developer", postedTime:"1d", employmentType:"Full Time", location:"USA Only", skills:["Frontend" , "Senior" , "HTML" , "CSS" , "JavaScript"]},
    {logoImage: "/images/3.png",companyName: "Account", isNew: true, isFeatured: false, jobTitle:"Junior Frontend Deve", postedTime:"2d", employmentType:"Part Time", location:"UK Only", skills:["Frontend" , "Senior" , "HTML" , "CSS"]},
    {logoImage: "/images/4.png",companyName: "MyHome", isNew: false, isFeatured: false, jobTitle:"Junior Frontend Deve", postedTime:"3d", employmentType:"Part Time", location:"Remote", skills:["HTML" , "CSS" , "JavaScript"]},
    {logoImage: "/images/5.png",companyName: "Loop Studios", isNew:false, isFeatured:false, jobTitle:"Software Engineer", postedTime:"1w", employmentType:"Part Time", location:"UK Only", skills:["Senior" , "HTML", "JavaScript"]},
    {logoImage: "/images/6.png",companyName: "FaceIt", isNew:false, isFeatured: false, jobTitle:"Junior Backend Devel", postedTime:"2d", employmentType:"Full Time", location:"USA Only", skills:["Frontend", "HTML" , "JavaScript"]},
    {logoImage: "/images/7.png",companyName: "Shortly", isNew: false, isFeatured: false, jobTitle:"Junior Developer", postedTime:"3d", employmentType:"Part Time", location:"USA Only", skills:["Senior" , "HTML" , "CSS" , "JavaScript"]},
    {logoImage: "/images/8.png",companyName: "Insure", isNew:false, isFeatured: false, jobTitle:"Junior Frontend Developer", postedTime:"3w", employmentType:"Full Time", location:"Remote", skills:["Frontend" , "Senior" , "CSS" , "JavaScript"]},
    {logoImage: "/images/9.png",companyName: "Eyecam Co.", isNew: false, isFeatured: false, jobTitle:"Full Stack Engineer", postedTime:"2w", employmentType:"Full Time", location:"USA Only", skills:["Frontend", "HTML", "JavaScript"]},
    {logoImage: "/images/10.png",companyName: "The Air Filter Compa", isNew: false, isFeatured: false, jobTitle:"Front-end Dev", postedTime:"5d", employmentType:"Full Time", location:"USA Only", skills:["Senior", "CSS", "JavaScript"]},
    {logoImage: "x",companyName: "y", isNew: false, isFeatured: false, jobTitle:"z", postedTime:"a", employmentType:"b", location:"c", skills: [""]},

];

const cardContainer = document.getElementById("cardContainer");

function createCard(data,index) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

        if (index < 1) {
            cardDiv.classList.add("left-border");
        }

    const cardContent = `
        <div class="data">
            <div class="logo card-logo" style="background-image: url('${data.logoImage}');">
                
            </div>
            <div class="attribute">
                <div class="one">
                    <span class="FirstLetter">${data.companyName}</span>
                    ${data.isNew ? '<span class="new">NEW!</span>' : ''}
                    ${data.isFeatured ? '<span class="featured">FEATURED</span>' : ''}
                </div>
                <div class="two">
                    ${data.jobTitle}
                </div>
                <div class="three">
                    <span class="day">${data.postedTime}</span> ago&nbsp;&nbsp; . &nbsp;
                    <span class="time">${data.employmentType}</span>&nbsp; . &nbsp;
                    <span class="country">${data.location}</span>
                </div>
            </div>
        </div>
        <div class="skills">
            ${data.skills.map(skill => `<nav>${skill}</nav>`).join('')}
        </div>
    `;

    cardDiv.innerHTML = cardContent;
    cardContainer.appendChild(cardDiv);
}

const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");

for (let i = 0; i < cardData.length; i++) {

    createCard(cardData[i], i);
}

function filterAndDisplayCards(searchTerm) {
    cardContainer.innerHTML = ""; 

    const filteredData = cardData.filter(data =>
        data.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    for (let i = 0; i < filteredData.length; i++) {
        createCard(filteredData[i], i);
    }
}

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim();
    filterAndDisplayCards(searchTerm);
});

clearButton.addEventListener("click", () => {
    searchInput.value = "";
    filterAndDisplayCards(""); 
});






