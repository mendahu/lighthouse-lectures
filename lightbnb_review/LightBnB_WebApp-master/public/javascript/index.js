$(() => {
  getAllListings().then(function (properties) {
    propertyListings.addProperties(properties);
    views_manager.show("listings");
  });
});
