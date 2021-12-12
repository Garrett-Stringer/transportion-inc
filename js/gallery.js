$(document).ready(function () {
  //console.log("ready!");

  $("#ngy2p").nanogallery2({
    thumbnailWidth: "300",
    thumbnailHeight: "auto",
    thumbnailBorderVertical: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom"
    },
    thumbnailHoverEffect2: "imageScaleIn80|labelAppear75",
    thumbnailAlignment: "center",
    thumbnailGutterWidth: 20,
    thumbnailGutterHeight: 20,
    thumbnailOpenImage: true
  });
});
