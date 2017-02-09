<?php
$id = '6'; // id элемента списка, взят просто для примера
$task = $_POST['tasktext'];

echo json_encode(array('id'=>$id,'task'=>$task));
?>