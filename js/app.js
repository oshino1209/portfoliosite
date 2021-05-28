$(function() {
  const $drawer = $('.js-drawer');
  const $anchorLink = $('.js-link');

  $drawer.on('click', function() {
    $('body').toggleClass('is-active');
  });

  $anchorLink.on('click', function() {
    $('body').removeClass('is-active');
  });
});