cloudinary.galleryWidget({
  container: '#exploration-gallery',
  cloudName: 'dkgj10lo2',
  mediaAssets: [{ tag: 'exploration-image', mediaType: 'image' }],
  carouselStyle: "thumbnails",
  carouselLocation: "bottom",
  aspectRatio: '3:2',
  mode: 'expanded',
}).render();