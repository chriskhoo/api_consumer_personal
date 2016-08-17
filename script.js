$(function(){
  var $loader = $('.loader');
  $.ajax({
    url: "https://fierce-escarpment-31768.herokuapp.com/",
    //https://crossorigin.me/
    type: "GET",
    dataType: 'json',
    // async: true,
    // crossDomain: true,
    // show the loader before making the request
    beforeSend: function (request) {
      $loader.show();
    },
  }).always(alwaysFn)
    .done(meDoneFn)
    .fail(meFailFn);

  function meFailFn(request, textStatus, errorThrown){
    $('#name').text(request+ textStatus + ' occurred during your request: '+ errorThrown );
  }
  function meDoneFn(data){
    var me = data[2];
    $('#name').text(me.name);
    $('#email').text(me.email);
    $('#number').text(me.number);
    $('#age').text(me.age);
  }
  function alwaysFn(){
    $loader.hide();
  }
});
