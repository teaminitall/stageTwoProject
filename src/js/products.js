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

		//购物车
		var but = document.querySelectorAll('.but');
		var commName = document.querySelectorAll('.commName');
		var nameArr = [];
		var moneyArr = [];
		var results = '';
		var quantity = 1;
		var isA = false;
		var totalMoney; //总金额
		for (var i = 0; i < but.length; i++) {
			but[i].index = i;
			but[i].onclick = function() {
				var name = commName[this.index].innerText;
				var money = but[this.index].innerText;
				var newMoney = money.match(/\d+(.\d+)?/g);
				nameArr.push(name);
				moneyArr.push(newMoney);
				var jsonStr = JSON.stringify({ name: nameArr, money: moneyArr });
				localStorage.setItem('goods', jsonStr);
				alert('成功加入购物车');
			};
		}
		// console.log(JSON.parse(localStorage.getItem('goods')));
		if (localStorage.getItem('goods')) {
			var Goods = JSON.parse(localStorage.getItem('goods'));
			for (var j = 0; j < Goods.name.length; j++) {
				results +=
					'<ul><li><span class="span01">' +
					Goods.name[j] +
					'</span><span class="span02">' +
					Goods.money[j] +
					'</span><div class="amount"><span class="reduce">-</span><input type="text" class="nr" value="1" /><span class="add">+</span></div><span class="span03">' +
					Goods.money[j] +
					'</span></li></ul>';
			}
			$('.onlineShopping').append(results);
		}
		$('.amount').on('click', '.add', function() {
			quantity = $(this)
				.prev()
				.attr('value');

			quantity++;
			// console.log(quantity);
			$(this)
				.prev()
				.attr('value', quantity);
			$(this)
				.parent()
				.next()
				.html(
					(
						quantity *
						$(this)
							.parent()
							.prev()
							.html()
					).toFixed(2)
				);
		});
		$('.amount').on('click', '.reduce', function() {
			quantity = $(this)
				.next()
				.attr('value');
			quantity--;
			// console.log(quantity);
			$(this)
				.next()
				.attr('value', quantity);
			if (quantity <= 0) {
				quantity = 0;
				$(this)
					.next()
					.attr('value', quantity);
			}
			$(this)
				.parent()
				.next()
				.html(
					(
						quantity *
						$(this)
							.parent()
							.prev()
							.html()
					).toFixed(2)
				);
		});

		$('.gwc').click(function() {
			if (!isA) {
				$('.onlineShopping').animate(
					{
						right: '0'
					},
					1000,
					'swing'
				);
				isA = !isA;
			} else {
				$('.onlineShopping').animate(
					{
						right: '-30%'
					},
					1000,
					'swing'
				);
				isA = !isA;
			}
		});
	});
})();
