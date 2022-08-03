function srbActive() {
    let srbDiv = document.getElementById('transformSrb');
    let srbImg = document.getElementById('transformSrbImg');
    let srbText = document.getElementById('transformSrbText');
    let uk = document.getElementById('transformUk');
    let borderHr = document.getElementById('indexBorder');

    borderHr.classList.add('indexImgActive');
    srbDiv.classList.add('transformSrbActive');
    srbImg.classList.add('transformSrbImgActive')
    srbText.classList.add('transformSrbTextActive');
    uk.classList.add('transformUkDeactive');

    setTimeout(() => {
        document.location.href ="./srb/Home.html"
    }, 2000);
}
function ukActive() {
    let ukDiv = document.getElementById('transformUk');
    let ukImg = document.getElementById('transformUkImg');
    let ukText = document.getElementById('transformUkText');
    let srb = document.getElementById('transformSrb');
    let borderHr = document.getElementById('indexBorder');

    borderHr.classList.add('indexImgActive');
    ukDiv.classList.add('transformUkActive');
    ukImg.classList.add('transformUkImgActive')
    ukText.classList.add('transformUkTextActive');
    srb.classList.add('transformSrbDeactive');
    setTimeout(() => {
        document.location.href ="./uk/Home.html"
    }, 2000);
}