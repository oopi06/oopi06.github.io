function setTimeout(function(){
  $('.bar').each(function(){
    $(this).find('.load').animate({
      width: $(this).attr('data-percent') }, 2000);
  });
}, 2000);

@keyframes typing {from {width: 0}}

@keyframes blink {50% {border-color: transparent}}
