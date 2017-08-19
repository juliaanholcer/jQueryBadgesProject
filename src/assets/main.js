$(document).ready(function() {

// Ajax request to the Report Card URL
$.ajax({
    url:'https://www.codeschool.com/users/julia_anholcer.json',
    dataType: 'jsonp',
    success: function(response) {
      //take only Array that contains completed courses
      //console.log('response',response.courses.completed);
      addCourses(response.courses.completed);
    }
});

//this function makes a content of the page based on what is in completed courses array
var addCourses = function(coursesArray) {
  var $badges = $('#badges');

  coursesArray.forEach(function(course) {
    //div with .course class
    var $course = $('<div></div>',{
      'class':'course'
    }).appendTo($badges);
    //h3 header with title attribute
    $('<h3></h3>', {
      text: course.title
    }).appendTo($course);
    //image with badge source
    $('<img />', {
      src: course.badge
    }).appendTo($course);
    //link with href = url, target attribute set as _blank , the btn & btn-primary CSS classes, See Course as its text contents
    $('<a></a>', {
      href: course.url,
      target: '_blank',
      'class': 'btn btn-primary',
      text: 'See Course'
    }).appendTo($course);
  });

};

});
