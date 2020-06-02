'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 20;
var FONT_GAP = 20;
var BAR_GAP = 50;
var TEXT_HEIGHT = 25;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var rand = function (min, max) {
    return Math.round(min + Math.random() * (max - min));
}

var get_random_color = function() {
    var h = 240;
    var s = rand(0, 100);
    var l = rand(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.textBaseline = 'bottom';

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - barHeight - TEXT_HEIGHT);

    if (players[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = get_random_color();
      console.log(get_random_color());
    }

    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - barHeight - TEXT_HEIGHT, BAR_WIDTH, barHeight);
  }
};
