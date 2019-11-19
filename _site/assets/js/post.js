$(document).ready(function(){
  $('img').css('max-width', '100%')
  $('td').css('border', '1px solid #ccc')
  $('figure.highlight').each(function(x, r){
    if ($(r).find('table').length < 1){
      $(r).find('pre').css('padding', '5px');
    }
  });
});