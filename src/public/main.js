// Search bar animations
$(document).ready(function(){
  $('#searchbar-icon').click(function(){
    $('#searchbar-input').animate({width: 'toggle'});
    $("#searchbar-icon").toggle();
    $("#searchbar-cross").toggle(500);
  });
  
  $('#searchbar-cross').click(function(){
    $('#searchbar-input').animate({width: 'toggle'});
    $("#searchbar-cross").toggle();
    $("#searchbar-icon").toggle(500);
  });
});

// Pressing ENTER to search in search bar
function submit() {
  document.searchForm.submit();
}