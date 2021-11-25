function addCard(firstName,lastName,email,avatar){
    let card = `<div class="col-4 mt-4">
    <div class="box w-100 h-100 p-3 d-flex">
        <div class="rounded-circle pe-3">
            <img style="width: 100px; height: 100px;" src="${avatar}" alt="">
        </div>
        <div class="information d-flex flex-column">
            <div class="d-flex name">${firstName}</div>
            <div class="d-flex lastName">${lastName}</div>
            <div class="d-flex email">${email}</div>
        </div>
    </div>
</div> `;
$('.profile').append(card);
}
