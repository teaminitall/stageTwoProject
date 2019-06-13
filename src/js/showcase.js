(function() {
	$(function() {
		$.ajax({
			type: 'get',
			url:
				' https://api.unsplash.com/photos?per_page=20&order_by=oldest&client_id=c658e589367c70ece7b27ee40bb900918db4765712f99d880ae365921e084e8b',
			dataType: 'json',
			cache: false,
			success: function(date) {
				// console.log(date);
				console.log(date[0].urls.thumb);
				var imgHtml = '';
				$.each(date, function(index, value) {
					imgHtml +=
						'<div class="imgBox"><img src="' +
						date[index].urls.small +
						'" alt="" class="img01" /></div>';
				});
				$('.img').html(imgHtml);
			}
		});

		$('.img').on('mouseover', '.imgBox', function() {
			$(this)
				.children()
				.css({
					width: '105%',
					height: '105%',
					transition: 'all .5s ease-out'
				});
		});
		$('.img').on('mouseout', '.imgBox', function() {
			$(this)
				.children()
				.css({ width: '100%', height: '100%', transition: 'all .5s ease-out' });
		});
	});
})();
