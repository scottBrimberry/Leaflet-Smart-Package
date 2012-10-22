Package.describe({
  summary: "An Open-Source JavaScript Library for Mobile-Friendly Interactive Maps 0.4.4"
});

Package.on_use(function (api) {
  
  api.add_files('dist/leaflet.css', 'client');
  api.add_files('dist/leaflet.ie.css', 'client');
  api.add_files('dist/leaflet-src.js', 'client');
  api.add_files('dist/images/layers.png', 'client');
  api.add_files('dist/images/marker-icon.png', 'client');
  api.add_files('dist/images/marker-shadow.png', 'client');
  api.add_files('dist/images/zoom-in.png', 'client');
  api.add_files('dist/images/zoom-out.png', 'client');

});
