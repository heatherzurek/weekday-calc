import { getUserDate } from './weekday-calc.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#buttForm").submit(function(event) {
    console.log("Butt forms always work");
    event.preventDefault();
    let userDate = $("#date").val();
    let output = getUserDate(userDate);
    $('p').text(output);
    $('div.result').show();
  });
});
