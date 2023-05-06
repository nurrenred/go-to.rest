

$(document).ready(function () {
  $(document).on('click', function (e) {
    if (!$('.header-btn-wrap-drop .dropdown-menu').is(e.target) && $('.header-btn-wrap-drop .dropdown-menu .dropdown-menu').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
      $('.dropdown').removeClass('open');
    }
  });

  $('.header-btn.dropdown-toggle').on('click', function (e) {
    e.stopPropagation();
    var $dropdown = $(this).closest('.dropdown');
    $('.dropdown').not($dropdown).removeClass('open');
    $dropdown.toggleClass('open');
  });


});


$(document).ready(function () {

  $('.header-btn-wrap-drop .dropdown-toggle').on('click', function (e) {

    $('.header-btn-wrap-drop .dropdown').removeClass('open');

  });
});







$(document).ready(function () {


  $(document).ready(function () {

    $(document).on('click', function (e) {
      if (!$(e.target).is('.dropdown-menu') && !$(e.target).parents().is('.dropdown-menu')) {
        $('.dropdown-menu').removeClass('show');
      }
      if (!$(e.target).is('.dropdown') && !$(e.target).parents().is('.dropdown')) {
        $('.dropdown').removeClass('open');
      }
      if ($(e.target).closest('.dropdown').hasClass('open')) {
        var dropdown = $(e.target).closest('.dropdown');
        dropdown.find('.show').removeClass('show');
      }

    });



  });




  $('.navbar-toggler').on('click', function (e) {

    $('.dropdown-menu').removeClass('show');
    $('.dropdown').removeClass('open');
  });
  $('.nav .dropdown').on('click', function (e) {
    $('.dropdown-menu').removeClass('show');

  });


  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    var subMenu = $(this).next('.dropdown-menu');
    if (subMenu.hasClass('show')) {
      subMenu.removeClass('show');
    } else {
      $('.dropdown-menu .dropdown-menu').removeClass('show');
      subMenu.addClass('show');

    }
    e.stopPropagation();
    e.preventDefault();
  });
});







$(document).ready(function () {

  $(document).on('click', function (e) {

    if (!$('.dropdown-menu').is(e.target) && $('.dropdown-menu').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
      $('.dropdown').removeClass('open');
    }

    if (!$('.navbar-collapse').is(e.target) && !$('.navbar-toggle').is(e.target) && $('.navbar-collapse').has(e.target).length === 0 && $('.navbar-toggle').has(e.target).length === 0) {
      $('.navbar-collapse').collapse('hide');
      $('.navbar-toggle').addClass('collapsed');
      $('.navbar-toggle').attr('aria-expanded', 'false');
    }

  });


  $('.navbar-collapse').on('hide.bs.collapse', function () {
    $('.navbar-toggle').addClass('collapsed');
    $('.navbar-toggle').attr('aria-expanded', 'false');
  });

  $('.navbar-collapse').on('show.bs.collapse', function () {
    $('.navbar-toggle').removeClass('collapsed');
    $('.navbar-toggle').attr('aria-expanded', 'true');
  });



});




$(document).ready(function () {
  $('.dropdown-toggle').on('click', function (e) {
    e.preventDefault();

    var $submenu = $(this).next('.dropdown-menu');
    var $parent = $(this).parent();

    if ($(this).parent().hasClass('open')) {
      if (!$submenu.hasClass('show')) {
        $('.dropdown-toggle.active-cat').removeClass('active-cat');
        $(this).addClass('active-cat');
      }
    } else {
      $('.dropdown-toggle.active-cat').removeClass('active-cat');
      $(this).addClass('active-cat');
    }
  });

  $('.dropdown-submenu .dropdown-toggle').on('click', function (e) {
    var $submenu = $(this).next('.dropdown-menu');
    var $parentMenu = $(this).closest('.dropdown-menu');
    var isSubMenuShown = $submenu.hasClass('show');

    e.stopPropagation();
    e.preventDefault();


    $('.dropdown-toggle.active-cat').not(this).removeClass('active-cat');


    if (isSubMenuShown) {
      $(this).addClass('active-cat');
    } else {
      $(this).removeClass('active-cat');
      if (!$parentMenu.hasClass('dropdown-menu-level-1')) {
        $parentMenu.prev('.dropdown-toggle').addClass('active-cat');
      }
    }


    if ($(this).hasClass('active-cat') && !isSubMenuShown) {
      $(this).removeClass('active-cat');
    }
  });


  $('.dropdown-menu > .dropdown-submenu > .dropdown-menu').on('show.bs.dropdown', function () {
    $(this).prev('.dropdown-toggle').addClass('active-cat');
  }).on('hide.bs.dropdown', function () {
    $(this).prev('.dropdown-toggle').removeClass('active-cat');
  });

  $('.navbar-collapse').on('hide.bs.collapse', function () {
    $('.dropdown-toggle.active-cat').removeClass('active-cat');
  });

  $(document).on('click', '.dropdown-submenu .dropdown-toggle.active-cat', function () {
    $(this).removeClass('active-cat');
  });
});








$('.search-cat').each(function () {
  const _this = $(this),
    selectOption = _this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    duration = 450;

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $('<div>', {
    class: 'new-select',
    text: _this.children('option:disabled').text()
  }).insertAfter(_this);

  const selectHead = _this.next('.new-select');
  $('<div>', {
    class: 'new-select__list'
  }).insertAfter(selectHead);

  const selectList = selectHead.next('.new-select__list');
  for (let i = 1; i < selectOptionLength; i++) {
    $('<div>', {
      class: 'new-select__item',
      html: $('<span>', {
        text: selectOption.eq(i).text()
      })
    })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find('.new-select__item');
  selectList.slideUp(0);


  selectHead.text(selectOption.eq(0).text());
  selectOption.eq(0).attr('selected', true);

  selectHead.on('click', function () {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(duration);

      selectItem.on('click', function () {
        let chooseItem = $(this).data('value');

        $('select').val(chooseItem).attr('selected', 'selected');
        selectHead.text($(this).find('span').text());

        selectList.slideUp(duration);
        selectHead.removeClass('on');
      });

    } else {
      $(this).removeClass('on');
      selectList.slideUp(duration);
    }
  });
});








var select = document.querySelector(".new-select");
var hiddenField = document.getElementsByName("post_type")[0];
select.addEventListener("click", function () {
  this.nextElementSibling.style.display = "block";
});
var selectItems = document.querySelectorAll(".new-select__item");
for (var i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    select.textContent = this.textContent;
    hiddenField.value = this.dataset.value;
    this.parentNode.style.display = "none";
  });
}









