document.addEventListener("DOMContentLoaded", function(event) {
    let bullets = document.getElementsByClassName("material-icons");
    let bulletTexts = document.getElementsByClassName("bullet-text-row");
    let phoneImg = document.getElementById("desktop-image");
    let previousBulletIndex = 0;
    let globalBulletInx = 1;
    const baseURL = '../assets/icons/';

    // Set to first bullet by default
    bullets[previousBulletIndex].style.backgroundColor = '#f74f9e';
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
            bullets[i].style.backgroundColor = '#f74f9e';
            bullets[i].style.color = '#f7f8f9';
            bulletTexts[i].style.cssText = 'display: block !important';
        } else  {
            bullets[previousBulletIndex].style.backgroundColor = '#f7f8f9';
            bullets[previousBulletIndex].style.color = '#203641';
            bulletTexts[previousBulletIndex].style.cssText = 'display: none !important';
            bullets[i].style.backgroundColor = '#f74f9e';
            bulletTexts[i].style.cssText = 'display: block !important';
        }
        // Change image url depending on which bullet is hovered over
        switch (i) {
            case 0:
                phoneImg.src = baseURL + 'icon-dashboard-stats.svg';
                previousBulletIndex = 0;
                globalBulletInx = 0;
                break;
            case 1:
                phoneImg.src = baseURL + 'icon-packages.svg';
                previousBulletIndex = 1;
                globalBulletInx = 1;
                break;
            case 2:
                phoneImg.src = baseURL + 'icon-promotions.svg';
                previousBulletIndex = 2;
                globalBulletInx = 2;
                break;
            case 3:
                phoneImg.src = baseURL + 'icon-scheduling.svg';
                previousBulletIndex = 3;
                globalBulletInx = 3;
                break;
            case 4:
                phoneImg.src = baseURL + 'icon-store-manager.svg';
                previousBulletIndex = 4;
                globalBulletInx = 4;
                break;
            case 5:
                phoneImg.src = baseURL + 'icon-qr-scanning.svg';
                previousBulletIndex = 5;
                globalBulletInx = 5;
                break;
            default:
                break;
        }
    }

    function doSetTimeout() {
        setTimeout(function() {
            changeStyles(globalBulletInx);
            globalBulletInx++;
            if (globalBulletInx < 6) {
                doSetTimeout();
            } else if (globalBulletInx >= 6) {
                globalBulletInx = 0;
                doSetTimeout();
            }
        }, 4000);

    }

});



