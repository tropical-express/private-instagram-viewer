var clashofclans_step = 0;
var clashofclans_messages = [
  { percentage: 3, message: 'Connecting to Instagram server...' },
  { percentage: 6, message: 'Validating username...' },
  { percentage: 12, message: 'Connecting to Instagram.... Profile found' },
  { percentage: 20, message: 'Connection successful on port 6358' },
  { percentage: 25, message: 'Recovering deleted messages...' },
  { percentage: 30, message: 'Requesting download link...' },
  { percentage: 36, message: 'Download link is ready' },
  { percentage: 60, message: 'Creating account on server. 7%' },
  { percentage: 75, message: 'Creating account on server.....79%' },
  { percentage: 85, message: 'Account created!' },
  { percentage: 91, message: 'Connecting Username.' },
  { percentage: 95, message: 'Uploading Cookie files.....' },
  { percentage: 97, message: 'Syncing account data' },
  { percentage: 100, message: 'Finishing up...' }
];

$(document).ready(function () {
  $('#start').click(function () {
    var username = $('#username').val();
    if (username.length < 3) {
      alert('Please enter your Username');
      return;
    }

    $('html, body').animate({ scrollTop: 0 }, 100);
    $('#input-form').hide();
    $('#progress').fadeIn();
    get_progress(0);

    try {
      ga('send', 'pageview', { page: '/?step=start', title: 'Start Process' });
    } catch (err) {}
  });

  $('#input-form').submit(function (e) {
    e.preventDefault();
  });
});

function get_progress(step) {
  if (clashofclans_step < clashofclans_messages.length) {
    var message = clashofclans_messages[clashofclans_step].message;
    var percent = clashofclans_messages[clashofclans_step].percentage;
    update_progress(message, percent);

    clashofclans_step++;
    clashofclans_messagesto = setTimeout(function () {
      get_progress();
    }, 700);
  } else {
    try {
      ga('send', 'pageview', {
        page: CLASHOFCLANS_URL + '?step=end',
        title: 'Clash of Clans Generator - End'
      });
    } catch (err) {}

    update_progress(
      '<h2>Done!</h2>Your request has been completed successfully. You can now view the Instagram content without any additional steps.',
      100
    );
    $('.progressbar-group').fadeOut();
  }
}

function update_progress(message, percent) {
  $('#progressbar')
    .attr('aria-valuenow', percent)
    .attr('style', 'width:' + percent + '%');
  $('#progressbar-message').html(message);
}
