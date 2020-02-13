'use strict';

//when user clicks button
$('form').submit(function(){

  event.preventDefault();


  console.log('we are in!');
  //append to shopping list the users' entry 
  let entry = $('#shopping-list-entry').val();
  //clear field
  $('#shopping-list-entry').val('');

  $('.shopping-list').append(`
    <li>
        <span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
  `);
  //calling functions once and throwing/refreshing page as it occurs
  $('.shopping-item-toggle').last().on('click', toggleCheck );
  $('.shopping-item-delete').last().on('click', deleteForever);

});


$('.shopping-item-toggle').on('click', toggleCheck );

function toggleCheck(event){
  // console.log(event);
  // console.log($(this));
  // console.log($(this).parent());
  
  const shoppingItem = $(this).parent().parent().find('.shopping-item');

  
  if(shoppingItem.hasClass('shopping-item__checked')){
    console.log('Removing class');
    shoppingItem.removeClass('shopping-item__checked');
  } else{
    console.log('adding class');
    shoppingItem.addClass('shopping-item__checked');
  }
}

$('.shopping-item-delete').on('click', deleteForever);

function deleteForever(event){

  // console.log($(this).parent());
  // console.log($(this).parent().parent());

  const shoppingItem = $(this).parent().parent();

  $(shoppingItem).remove();
}