jQuery(document).ready(function($) {
	// Делаем список сортируемым
	$("#sortable").sortable({
		// Определение начального положения элемента в списке,
		// в качестве положения используется индекс элемента,
		// индекс первого элемента равен 0
		start: function(event, ui) {
			// начальное положение будет храниться в объекте ui
			ui.item.startInd = ui.item.index();
		},
		// Определение конечного положения элемента в списке,
		// если произошла смена порядка элементов
		update: function(event, ui) {
			var startIndex = ui.item.startInd;
			var newIndex = ui.item.index();
			// Отправка ajax запроса с начальным и конечным
			// положениями элемента 
			$.ajax({
				type: 'POST',
				url: '../test1.php',
				data: {startPos: startIndex, newPos: newIndex},
				// если данные сохранились успешно, осуществляется
				// их вывод в консоль для проверки
				success: function(data) {
					console.log("Start index:" + data[0]);
					console.log("New index:" + data[1]);
				},
				error: function(data,err) {
					alert(err);
				}
			});
		}
	});

	// Добавление нового элемента в список
	$('#add-form').submit(function() {
		var task = $('#task-text').val();
		// Если поле добавления дела не пустое
		if (task != '') {
			// отправляется запрос
			$.ajax({
				type: 'POST',
				url: '../test2.php',
				data: {tasktext: task},
				success: function(data) {
					// Создаётся новый элемент списка
					createLi(data.id, data.task).appendTo('#sortable');
				},
				error: function(data,err) {
					alert(err);
				},
				dataType: 'json'
			});
			// Очищается форма
			$('#task-text').val('');
		} else {
      alert('Вы не ввели текст');
    }
    return false;
	});

	// Функция создания элемента списка
	function createLi(id, task) {
   	var task = $('<span>' + task + '</span>');
   	return $('<li id="task_' + id + '""></li>').append(task);
	}
});