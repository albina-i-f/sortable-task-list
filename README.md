# sortable-task-list

В сортируемом списке дел присутствуют следующие формы: 
1. Форма для добавления дела: по нажатию на кнопку "сохранить" отправляется ajax запрос на сервер и это дело отправляется в форму "список дел"
2. Форма "список дел". В этой форме отображается весь список дел. Реализована функция перетаскивания дела: при изменении порядка дел в списке отправляется 
ajax запрос на сервер с переменными: "позиция с которой перемещаем", "позиция на которую перемещаем".

## Что использовалось:
* [jQuery] (https://jquery.com/) первой ветки;
* [jQuery UI] (https://jqueryui.com/).