/* eslint-env jquery*/
let $main;
$(initialize);

function initialize() {
  $main = $('main');
  navigate('nav0');
  addListeners();
}

function addListeners() {
  const $nav = $('nav');
  $nav.on('click', 'a', function() {
    const id = $(this).attr('id');
    navigate(id);
    navSelect(id);
  });
}

function navigate(id) {
  switch (id) {
    case 'nav0':
      render0();
      break;
    case 'nav1':
      render1();
      break;
    case 'nav2':
      render2();
      break;
    default:
  }
}

function navSelect(id) {
  $('.nav-open').removeClass('nav-open');
  $(`#${id}`).addClass('nav-open');
}

function render0() {
  $main.empty();
  const $section = $('<section>', {
    class: 'js-sec0',
    html: $('<p>', {
      text: `Highly motivated web developer, with experience building RESTful APIs,
        managing databases, and building applications with Javascript,
        React, and various testing suites.`
    }),
  });
  $main.append($section);
}

function render1() {
  $main.empty();
  const $section = $('<section>', {
    class: 'js-sec1',
    html: [
      $('<article>', {
        html: $('<a>', {
          href: "https://github.com/tkshehan/chess-openings",
          text: 'Lichess Openings',
        })
      }),
      $('<article>', {
        html: $('<a>', {
          href: "https://github.com/tkshehan/t7-client",
          text: 'Tekken 7 Frame Data',
        })
      }),
      $('<article>', {
        html: $('<a>', {
          href: "https://github.com/tkshehan/packing-planner",
          text: 'Simple Packing',
        })
      }),
    ],
  });
  $main.append($section);
}

function render2() {
  $main.empty();
  const $section = $('<section>', {
    class: 'js-sec2',
    html: [
      $('<a>', {
        href: 'https://www.linkedin.com/in/thomaskshehan/',
        text: 'LinkedIn',
      }),
      $('<a>', {
        href: 'https://github.com/tkshehan',
        text: 'GitHub',
      }),
      $('<a>', {
        href: 'mailto:thomas.shehan88@gmail.com',
        text: 'Email',
      }),
    ],
  });
  $main.append($section);
}
