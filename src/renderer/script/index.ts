// src/renderer/script/index.ts

// CSS 선언
import "../css/font.css";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// 모듈 선언
import $ from "jquery";
import "bootstrap";

$(document).ready(() => {
    console.log("Jquery is working!");
});