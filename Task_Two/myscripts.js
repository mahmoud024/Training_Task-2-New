const cardData = [
    {ids:1 ,logoImage: "./images/1.png",companyName: 'Mahmoud', isNew: yes, isFeatured: yes, jobTitle:'Front-End Developer', postedTime:'3-9-2023', employmentType:'Full-Time', location: 'PS', skills:['HTML' , 'CSS', 'Java_Script']},
    {ids:2 ,logoImage: "./images/2.png",companyName: 'Atia', isNew: yes, isFeatured: no, jobTitle:'Back-End Developer', postedTime:'4-9-2023', employmentType:'Full-Time', location: 'KSA', skills:['HTML' , 'CSS']},
    {ids:3 ,logoImage: "./images/3.png",companyName: 'Ali', isNew: no, isFeatured: no, jobTitle:'Front-End Developer', postedTime:'5-9-2023', employmentType:'Full-Time', location: 'PN', skills:['HTML' , 'CSS', 'Java_Script','Python']},
    {ids:4 ,logoImage: "./images/4.png",companyName: 'Musatfa', isNew: no, isFeatured: no, jobTitle:'Back-End Developer', postedTime:'6-9-2023', employmentType:'Full-Time', location: 'USA', skills:['HTML' , 'CSS', 'QA']},
    {ids:5 ,logoImage: "./images/5.png",companyName: 'Esa', isNew: no, isFeatured: no, jobTitle:'Back-End Developer', postedTime:'7-9-2023', employmentType:'Full-Time', location: 'EMA', skills:['HTML' , 'CSS', 'Agular']},
    {ids:6 ,logoImage: "./images/6.png",companyName: 'Mohammad', isNew: no, isFeatured: no, jobTitle:'Back-End Developer', postedTime:'8-9-2023', employmentType:'Full-Time', location: 'QTR', skills:['HTML' , 'CSS', 'Java_Script','Angular','Jquery']},
    {ids:7 ,logoImage: "./images/7.png",companyName: 'Mosa', isNew: no, isFeatured: no, jobTitle:'Back-End Developer', postedTime:'9-9-2023', employmentType:'Full-Time', location: 'EO', skills:['HTML' , 'CSS']},
    {ids:8 ,logoImage: "./images/8.png",companyName: 'Rami', isNew: no, isFeatured: no, jobTitle:'Front-End Developer', postedTime:'10-9-2023', employmentType:'Full-Time', location: 'AF', skills:['Java_Script','Angular']},
];

const cardContainer = document.getElementById("cardContainer");

function createCard(data,index) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    if (index < 1) {
        cardDiv.classList.add("left-border");
    };


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
                    <span class="day">${data.postedTime}</span>&nbsp;&nbsp; . &nbsp;
                    <span class="time">${data.employmentType}</span>&nbsp; . &nbsp;
                    <span class="country">${data.location}</span>
                </div>
            </div>
        </div>
        <div class="skills">
            ${data.skills.map(skill => `<nav>${skill}</nav>`).join('')}
        </div>
        <div class="edit-button">
            <button class="edit">
            <i class="fa-solid fa-less-than"></i>
            </button>
            <button class="update hide">
            <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="delete hide">
            <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `;



    cardDiv.innerHTML = cardContent;
    setupEditButtonAnimation(cardDiv);

    cardContainer.appendChild(cardDiv);
}


$(document).ready(function() {
    const addCardPopup = document.getElementById("addCardPopup");
    const addCardButton = document.getElementById("addCardButton");
    const popupClose = document.getElementById("popupClose");

    addCardButton.addEventListener("click", function() {
        addCardPopup.style.display = "block";
    });

    popupClose.addEventListener("click", function() {
        addCardPopup.style.display = "none";
    });
});

/******************************************************************************/
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


/////////////////////////////////////////////// for choose file 
const avatarInput = document.getElementById('avatar');
const fileNameSpan = document.getElementById('fileName');
avatarInput.addEventListener('change', function () {
    fileNameSpan.textContent = this.files[0] ? this.files[0].name : 'No file chosen';
});

$(document).ready(function() {
    var ids = 0;
    
    for (const card of cardData) {
        ids = card.ids;
    }

    $(".save").click(function() {
        ids++;

        var images = $("#fileName").val();
        var companyName = $(".compholder").val();
        var isNew = $("input[name='isNew']:checked").val();
        var isFeatured = $("input[name='isFeatured']:checked").val();
        var country = $("#country").val();
        var jobTitle = $(".jobtitle").val();
        var postedTime = $("input[type='date']").val();
        var employeeType = $("input[name='employeetype']:checked").val();
        
        var skills = [];
        $("input[name='OS']:checked").each(function() {
            skills.push($(this).val());
        });

        const obj = {ids:ids ,logoImage: "./images/profile.png",companyName: companyName, isNew: isNew, isFeatured: isFeatured, jobTitle:jobTitle, postedTime:postedTime, employmentType:employeeType, location:country, skills:skills};
        cardData.push(obj);

        const newIndex = cardData.length - 1;
        createCard(cardData[newIndex], newIndex);

    });
});


// for update card
$(document).ready(function() {
$(".update").click(function() {
    const index = $(".update").index(this);
    const selectedCard = cardData[index];

    $(".compholder").val(selectedCard.companyName);
    //$(".jobtitle").val(selectedCard.jobTitle);
/*
    $("input[name='isNew']:checked").val(selectedCard.isNew);
    $("input[name='isFeatured']:checked").val(selectedCard.isFeatured);
    $("#country").val(selectedCard.country);
    $("input[type='date']").val(selectedCard.postedTime);
    $("input[name='employeetype']:checked").val(selectedCard.employmentType);
    $("input[name='OS']:checked").each(function() {
        skills.push($(this).val(selectedCard.skills));
    });
*/
    addCardPopup.style.display = "block";

        $("#saveCardForm").off("submit").on("submit", function(event) {
            event.preventDefault();

            selectedCard.companyName = $(".compholder").val();
            //selectedCard.jobTitle = $(".jobtitle").val();
/*
            selectedCard.isNew = $("input[name='isNew']:checked").val();
            selectedCard.isFeatured = $("input[name='isFeatured']:checked").val();
            selectedCard.country = $("#country").val();
            selectedCard.postedTime = $("input[type='date']").val();
            selectedCard.employmentType = $("input[name='employeetype']:checked").val();
            selectedCard.skills = $("input[name='OS']:checked").each(function() {
                skills.push($(this).val());
            });
*/
            cardContainer.innerHTML = "";
            for (let i = 0; i < cardData.length; i++) {
                createCard(cardData[i], i);
            }
            addCardPopup.style.display = "none";
        });
    });
});



$(document).ready(function() {
    $(".delete").click(function() {
        $(this).closest(".card").remove();
        const index = $(".delete").index(this);
        console.log(cardData[index]);
        cardData.splice(index, 1);
    });
});

function setupEditButtonAnimation(cardDiv) {
    const editButton = cardDiv.querySelector('.edit-button');
    const deleteButton = cardDiv.querySelector('.delete');
    const updateButton = cardDiv.querySelector('.update');

    editButton.addEventListener('click', () => {
        deleteButton.classList.toggle('show');
        updateButton.classList.toggle('show');
        const isActive = deleteButton.classList.contains('show');
        editButton.querySelector('.edit').classList.toggle('active', isActive);
    });
}