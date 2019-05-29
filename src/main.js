import { getUserDate } from './weekday-calc.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#buttForm").submit(function(event) {
    event.preventDefault();
    let userDate = $("#date").val();
    let date = new Date(userDate);
    let output = getUserDate(date);
    $('p').text(output);
  });
});
