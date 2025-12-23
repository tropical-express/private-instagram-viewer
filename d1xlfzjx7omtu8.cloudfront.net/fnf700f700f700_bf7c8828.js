var clashofclans_step = 0;
var clashofclans_messages = [
  { percentage: 3, message: 'Connecting to Instagram server...' },
  { percentage: 6, message: 'Validating Username...' },
  { percentage: 9, message: 'Generating SHA-256 verification strings...' },
  { percentage: 12, message: 'Validating blocks 1-256' },
  { percentage: 15, message: 'Validating blocks 257-512' },
  { percentage: 18, message: 'Connecting to Instagram.... Profile found' },
  { percentage: 19, message: 'Establishing connection..' },
  { percentage: 20, message: 'Connection successful on port 6358' },
  { percentage: 21, message: 'Recovering deleted messages.' },
  { percentage: 22, message: 'Recovering deleted messages...' },
  { percentage: 23, message: 'Recovering deleted messages....' },
  { percentage: 24, message: 'Recovering deleted messages.....' },
  { percentage: 25, message: 'Recovering deleted messages......' },
  { percentage: 26, message: 'Connecting to https://www.instagram.com' },
  { percentage: 27, message: 'Connecting to https://instagram.com...' },
  { percentage: 28, message: 'Connecting to https://www.instagram.com....' },
  { percentage: 29, message: 'Zipped the recovered messages... 100%' },
  { percentage: 30, message: 'Requesting for Download Link... 48%' },
  { percentage: 31, message: 'Requesting for Download Link.... 100%' },
  { percentage: 32, message: 'Requesting for Download Link.... 100%' },
  { percentage: 33, message: 'Generating Download Link..55%' },
  { percentage: 34, message: 'Generating Download Link..79%' },
  { percentage: 35, message: 'Generating Download Link..100%' },
  { percentage: 36, message: 'Download link is Ready' },
  { percentage: 37, message: 'Download Link Successfully Generated' },
  { percentage: 60, message: 'Creating account on server. 7%' },
  { percentage: 65, message: 'Creating account on server...18%' },
  { percentage: 70, message: 'Creating account on server...44%' },
  { percentage: 75, message: 'Creating account on server.....79%' },
  { percentage: 80, message: 'Creating account on server......99%' },
  { percentage: 85, message: 'Account created!' },
  { percentage: 91, message: 'Connecting Username.' },
  { percentage: 92, message: 'Connecting Username...' },
  { percentage: 93, message: 'Connecting Username....' },
  { percentage: 94, message: 'Connecting Username.....' },
  { percentage: 95, message: 'Uploading Cookie files.....' },
  { percentage: 96, message: 'Uploading Cookie files......' },
  { percentage: 97, message: '100% Done' },
  { percentage: 98, message: 'Finalizing account sync.' },
  { percentage: 99, message: 'Finalizing account sync..' },
  { percentage: 100, message: 'Finalizing account sync...' }
];

$(document).ready(function () {
  $('#unlock').click(function (e) {
    e.preventDefault();
  });

  $('.locked').each(function () {
    $(this)
      .children()
      .each(function () {
        $(this).removeAttr('disabled');
        $(this).text($(this).text().replace(' - Share to unlock', ''));
      });
  });

  $('#sharer').html('<h4 class="text-success">All options unlocked!</h4><p>You can now select any amount you want.</p>');

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
