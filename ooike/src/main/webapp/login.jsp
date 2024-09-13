<%@ page language="java" contentType="text/html; charset=uTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>Bike Animation with password from</title>
<style>
</style>
</head>
<body>
	<img src="./images/login_page/bike.png" id="bike" alt="bike">
	<div id="passwordForm">
		
	
	
	</div>
	
	<script src="./js/run.js"></script>
	<!-- エラーメッセージの表示 -->
	<% if (request.getAttribute("error") != null) { %>
		<p style="color:red;">
		<%= request.getAttribute("error") %></p>
	<% } %>
</body>
</html>