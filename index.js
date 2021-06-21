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

function project2() {
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
            text: `Front-end React/Redux webapp.`,
          }),
        ],
      }),
    ],
  });
}

function project3() {
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
            text: `Including links to resources for players to better understand their game.`,
          }),
        ],
      }),
    ],
  });
}

function project1() {
  return $('<article>', {
    html: [$('<a>', {
      href: "https://github.com/tkshehan/invisible",
      text: 'Cloak & Hacker',
    }),
    $('<ul>', {
      html: [
        $('<li>', {
          text: `Stealth Puzzle game made in Godot game engine with a python based language.`,
        }),
        $('<li>', {
          html: [
            `Collaborated with a composer, organized using `,
            $('<a>', {
              href: "https://sharing.clickup.com/b/h/4-4434024-2/f5e4b4c9ed94d14",
              text: 'clickup'
            })
          ]
          ,
        }),
        $('<li>', {
          text: `Learned and applied many new concepts under time pressure, regularly refactoring for modularity and readability.`,
        }),
      ],
    }),
    ],
  });
}