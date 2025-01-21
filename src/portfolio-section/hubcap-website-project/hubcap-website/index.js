//" How it works" section logic
document.addEventListener("DOMContentLoaded", function (event) {
    let bullets = document.getElementsByClassName("outer-ring");
    let bulletTexts = document.getElementsByClassName("bullet-text-row");
    let phoneImg = document.getElementById("phone-image");
    let previousBulletIndex = 0;
    let globalBulletInx = 1;
    const baseURL = 'assets/screens/';

    // Set to first bullet by default
    bullets[previousBulletIndex].children[0].children[0].style.backgroundColor = '#f74f9e';
    bulletTexts[previousBulletIndex].style.cssText = 'display: flex !important';

    doSetTimeout();

    // Controls features display
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].addEventListener('mouseover', function (e) {
            changeStyles(i)
        });
    }

    // Color and hold bullet on hover and change content respectively
    // Show and hide respective content according to bullet hovered over
    function changeStyles(i) {
        if (previousBulletIndex === i) {
            bullets[i].children[0].children[0].style.backgroundColor = '#f74f9e';
            bulletTexts[i].style.cssText = 'display: flex !important';
        } else {
            bullets[previousBulletIndex].children[0].children[0].style.backgroundColor = 'transparent';
            bulletTexts[previousBulletIndex].style.cssText = 'display: none !important';
            bullets[i].children[0].children[0].style.backgroundColor = '#f74f9e';
            bulletTexts[i].style.cssText = 'display: flex !important';
        }
        // Change image url depending on which bullet is hovered over
        switch (i) {
            case 0:
                phoneImg.src = baseURL + '01-app-store-list.png';
                previousBulletIndex = 0;
                globalBulletInx = 0;
                break;
            case 1:
                phoneImg.src = baseURL + '02-app-store-quick-preview.png';
                previousBulletIndex = 1;
                globalBulletInx = 1;
                break;
            case 2:
                phoneImg.src = baseURL + '03-app-store-detail.png';
                previousBulletIndex = 2;
                globalBulletInx = 2;
                break;
            case 3:
                phoneImg.src = baseURL + '04-app-cart.png';
                previousBulletIndex = 3;
                globalBulletInx = 3;
                break;
            case 4:
                phoneImg.src = baseURL + '06-app-activate.png';
                previousBulletIndex = 4;
                globalBulletInx = 4;
                break;
            default:
                break;
        }
    }

    function doSetTimeout() {
        setTimeout(function () {
            changeStyles(globalBulletInx);
            globalBulletInx++;
            if (globalBulletInx < 5) {
                doSetTimeout();
            } else if (globalBulletInx >= 5) {
                globalBulletInx = 0;
                doSetTimeout();
            }
        }, 6000);

    }
});
