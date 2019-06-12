(function() {
	$(function() {
		$('#Cart i').mousemove(function() {
			$('.shoppingCart').css('display', 'inline-block');
		});
		$('html').mousemove(function(e) {
			if (
				$(e.target).attr('class') != 'shoppingCart' &&
				$(e.target).attr('class') != 'iconfont icon-gouwuche gwc' &&
				$(e.target)
					.closest()
					.attr('id') != 'Cart'
			) {
				$('.shoppingCart').css('display', 'none');
			}
		});
	});
})();
