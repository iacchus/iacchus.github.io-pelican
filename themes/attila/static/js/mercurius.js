abcjs_plugin_autostart = false;
window.ABCJS.plugin.auto_render = false;

$(document).ready(function(){

  // emojify
  emojify.setConfig({ignore_emoticons : true});
  emojify.run();

  // autoembed
  $("div.post-content a.autoembed").oembed();
  function is_it_abc(elem) {
    if(window.ABCJS.plugin.getABCContainingElements(elem).length) return true;
    else return false;
  }

  if($("code.abc").length)
  {
    var tunes_code = $("code.abc");
			
    for(var $i=0; tunes_code[$i]; $i++)
    {               
      if(! is_it_abc($(tunes_code[$i]))) continue;

      var ws_strip="";
      var mystr="";

      ws_strip = $(tunes_code[$i]).text().split('\n');
      for(var aaa=0; ws_strip[aaa]; aaa++) { mystr+=ws_strip[aaa].trim() + "\n"; }

      $(tunes_code[$i]).text(mystr); //abctune

      $('<div id="abctune-' + $i + '" class="abctune-rendered"></div>').insertBefore($(tunes_code[$i]).parent());
      ABCJS.renderAbc(
        "abctune-"+$i, //container
        "%%staffsep 27pt\n" + $(tunes_code[$i]).text(), //abctune
        { }, //parserParams
        {
          scale: 1,
          staffwidth:700,
          paddingtop: 0,
          paddingbottom: 0,
          paddingright: 0,
          paddingleft: 0,
        }, //engraverParams
        { viewportHorizontal: true } //renderParams
      );
      $(tunes_code[$i]).parent().hide();
    }
  }

  if($("code.abckeep").length)
  {
    var tunes_code = $("code.abckeep");
			
    for(var $i=0; tunes_code[$i]; $i++)
    {               
      if(! is_it_abc($(tunes_code[$i]))) continue;

      var ws_strip="";
      var mystr="";

      ws_strip = $(tunes_code[$i]).text().split('\n');
      for(var aaa=0; ws_strip[aaa]; aaa++) { mystr+=ws_strip[aaa].trim() + "\n"; }

      $(tunes_code[$i]).text(mystr); //abctune

      $('<div id="abctunekeep-' + $i + '" class="abctune-rendered"></div>').insertBefore($(tunes_code[$i]).parent());
      ABCJS.renderAbc(
        "abctunekeep-"+$i, //container
        "%%staffsep 27pt\n"+$(tunes_code[$i]).text(), //abctune
        { }, //parserParams
        {
          scale: 1,
          staffwidth:700,
          paddingtop: 0,
          paddingbottom: 0,
          paddingright: 0,
          paddingleft: 0,
        }, //engraverParams
        { viewportHorizontal: true } //renderParams
      );
      $(tunes_code[$i]).parent().css({marginTop:0})
      //$(tunes_code[$i]).hide();
    }
  }
})
