<%@ page language="java" contentType="text/html; charset=uTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ja">

<head>
<meta charset="UTF-8">
<title>Bike Animation with password from</title>
<style>
    body{
    	margin: 0;
    	overflow: hidden; /* スクロールバーを非表示 */
    }
    
    #bike{
    	position: absolute;
    	widｔh: 100px; /* 画像の幅設定 */
    	height: auto; /* 高さは幅に合わせて自動調整 */
    }
    
    #passwordForm{
    	display: none;
    	position: flexed;
    	top: 50%;
    	left: 50%;
    	transform: translate(-50%, -50%);
    	background: white;
    	padding: 20px;
    	boder: 1px solid #ccc;
    	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    #pssswordForm input {
    	margin-bottom: 10px;
    }
    
    # passwordForm button {
    	margin-bottom: 10px;
    	padding: 10px;
    }
</style>
</head>

<body>
	<img src="./images/book.png" id="bike" alt="bike">
	<div id="passwordForm">
		<form id="form" action="./login" method="POST">
			<input type="text" name="userId placeholder="ユーザー名" required><br>
			<input type="password" name="password" placeholder="パスワード" required><br>
			<button type="submit">送信</button>
			<button type="button" id="cancelButton">キャンセル</button>
		</form>
	</div>
	
	<script src="./js/run.js"></script>
	<!-- エラーメッセージの表示 -->
	<% if (request.getAttribute("error") != null) { %>
		<p style="color:red;">
		<%= request.getAttribute("error") %></p>
	<% } %>
</body>
</html>