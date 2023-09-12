$(document).ready(function() {
    // When hovering over a nav item with a dropdown
    $('.nav_dropdown').hover(
      function() {
        $(this).find('.dropdown_content').css('display', 'block');
      },
      function() {
        $(this).find('.dropdown_content').css('display', 'none');
      }
    );
  });