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
    class: 'js-sec0 about',
    html: [$('<p>', {
      text: `
        Enthusiastic web developer with a love of problem solving, a focus on clean, manageable code, client oriented service and drive to help others succeed.`
    }),
    $('<p>', {
      text: `Experience building RESTful APIs,
        managing databases, and building applications with HTML/CSS, Javascript,
        React, and assorted testing suites.`
    }),
    ],
  });
  $main.append($section);
}

function render1() {
  $main.empty();
  const $section = $('<section>', {
    class: 'js-sec1 projects',
    html: [
      project1(),
      project2(),
      project3(),
    ],
  });
  $main.append($section);
}

function render2() {
  $main.empty();
  const $section = $('<section>', {
    class: 'js-sec2 contact',
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

function project1() {
  return $('<article>', {
    html: [
      $('<a>', {
        href: "https://github.com/tkshehan/t7-client",
        text: 'Tekken 7 Frame Data',
      }),
      $('<ul>', {
        html: [
          $('<li>', {
            text: `Lightweight web-crawler to regularly retrieve frame data from reliable sources`,
          }),
          $('<li>', {
            text: `API in Express.js/Node.js providing up to date frame data to myself and other developers.`,
          }),
          $('<li>', {
            text: `Front-end React/Redux webapp continuously under development.`,
          }),
        ],
      }),
    ],
  });
}

function project2() {
  return $('<article>', {
    html: [
      $('<a>', {
        href: "https://github.com/tkshehan/chess-openings",
        text: 'Lichess Openings',
      }),
      $('<ul>', {
        html: [
          $('<li>', {
            text: `An accessibility focused static web application for Lichess.org users to gather data on their past games.`,
          }),
          $('<li>', {
            text: `Mobile-first, responsive design, following a11y best practices.`,
          }),
          $('<li>', {
            text: `Additional resources integrated from multiple outside sources for the convenience of the end-user.`,
          }),
        ],
      }),
    ],
  });
}

function project3() {
  return $('<article>', {
    html: [$('<a>', {
      href: "https://github.com/tkshehan/packing-planner",
      text: 'Simple Packing',
    }),
    $('<ul>', {
      html: [
        $('<li>', {
          text: `A mobile-first web app for planning, saving, and printing checklists for frequent travelers.`,
        }),
        $('<li>', {
          text: `Features mongodb, express, express-routers, and delivered through browserify for a modulated development environment.`,
        }),
        $('<li>', {
          text: `Continuous integration and testing through Travis-CI.`,
        }),
      ],
    }),
    ],
  });
}