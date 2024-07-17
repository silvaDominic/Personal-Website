cloudinary.galleryWidget({
    container: '#nyc-gallery',
    cloudName: 'dkgj10lo2',
    mediaAssets: [{ tag: 'nyc-image', mediaType: 'image' }],
    carouselStyle: "thumbnails",
    carouselLocation: "bottom",
    aspectRatio: '3:2',
    mode: 'expanded',
}).render();