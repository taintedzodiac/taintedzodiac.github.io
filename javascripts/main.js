jQuery(document).ready ( function() {
  jQuery.get( 'https://www.codeschool.com/users/taintedzodiac.json', function(data) {
    var user = data['user'];
    var courses = data['courses'];
    var badges = data['badges'];

    $('#codeschool-courses').html('<div id="completed"><h3>Completed</h3></div>'
    + '<div id="in_progress"><h3>In Progress</h3></div>');

    jQuery.each(['completed', 'in_progress'], function(i, category) {
      jQuery.each(courses[category], function(j, course) {
        jQuery('#' + category).append(
          '<a href="'
          + course['url']
          + '"><img src="'
          + course['badge']
          + '" width="20%" /></a>'
        );
      });
    });
  },
  'jsonp');
});
