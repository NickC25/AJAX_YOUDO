// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  console.log('document is ready');
  console.log(new Date());
});

$(document).on('turbolinks:load', ready);

// $(function() {
//   console.log('ready')
//   $('#task_name')
// .focus()
// });
