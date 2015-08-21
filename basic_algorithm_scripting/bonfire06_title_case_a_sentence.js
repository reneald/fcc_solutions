function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(val) {
    return (val.charAt(0).toUpperCase() + val.substr(1));
  }).join(' ');
}

titleCase("I'm a little tea pot");