$(document).ready(function(){
    /*
    //! select multiple way
    $('h1').hide();
    $('.test').hide();
    $('#test2').hide();
    select all tag
    $('*').hide();
    */
   /*
   //! use this keyword as selector
   way1:
   $('button').click(function(){
       $('button').hide();
   })
   way2:
   
   $('button').click(function(){
    $(this).hide();
    })
    */
    /*
   //! select html tag + id(#tagname) or class(.classname)
   $('button').click(function(){
       $('p#test1').hide();
   })
   */

  
  //! use last, first keyword
  $('button').click(function(){
     $('p:last').hide();
    })
    $('button').click(function(){
        $('p:first').hide();
    })
  
 
 
})