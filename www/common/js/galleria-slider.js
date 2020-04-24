$(document).ready(function() {
//If Galleria is detected, run, and configure
    if (Galleria) {
        Galleria.run('.galleria');
        Galleria.configure({
            //thumbnails: 'lazy', //lazy-loads thumbnails; not implemented yet
            transition: 'slide',
            imageCrop: false,
            _hideDock: true,
            _closeOnClick: false,
            showImagenav: true
        });

        //Configures keys for navigating through gallery
        Galleria.ready(function () {
            this.attachKeyboard({
                left: this.prev,
                right: this.next
            });
        });

    } else {
        console.log("The Galleria App could not be found.");
    }
});