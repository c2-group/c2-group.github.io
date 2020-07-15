$(document).ready(function(){
  $('img').css('max-width', '100%')
  document.querySelectorAll('p > img').forEach(ele => {
    ele.parentElement.style.textAlign = 'center'
  })
  $('td').css('border', '1px solid #ccc')
  $('figure.highlight').each(function(x, r){
    if ($(r).find('table').length < 1){
      $(r).find('pre').css('padding', '5px');
    }
  });

  var toc = $('#nav-toc');

    // Select each header
    sections = $('#md-container-pancakes h1');
        $.each(sections, function(idx, v) {
            section = $(v);
            var div_id = $(section).attr('id');
            var div_text = section.text().split('¶')[0];
            var parent = $("#" + div_id)
            var content = '<li id="link_' + div_id + '" class="md-nav__item"><a class="md-nav__link" href="#' + div_id + '" title="' + div_text +'">' + div_text +'</a></li>';
            $(toc).append(content);

            // Add section code to subnavigation
            var children = $('<ul class="md-nav__list"></ul>')
            var contenders = $("#" + div_id).nextUntil( "h1" );
            $.each(contenders, function(idx, contender){
               if($(contender).is('h2')) {
                   var contender_id = $(contender).attr('id');
                   var contender_text = $(contender).text().split('¶')[0];
                   var content = '<li class="md-nav__item"><a class="md-nav__link" href="#' + contender_id + '" title="' + contender_text +'">' + contender_text +'</a></li>';
                   children.append(content);
                }
             })
             $("#link_" + div_id).append(children);
        });
});