<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bike Animation with Password Form</title>
    <style>
        body {
            margin: 0;
            overflow: hidden; /* スクロールバーを非表示 */
        }
        #bike {
            position: absolute;
            width: 100px; /* 画像の幅を設定（必要に応じて調整） */
            height: auto; /* 高さは自動調整 */
        }
        #passwordForm {
            display: none; /* 初期状態では非表示 */
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        #passwordForm input,
        #passwordForm button {
            margin-bottom: 10px;
        }
        #passwordForm button {
            padding: 10px;
        }
    </style>
</head>
<body>
    
    <img src="./images/ログイン画面/自転車-遅い1.png" id="bike" alt="Bike">
    
    <div id="passwordForm">
        <form id="form" action="./login" method="POST">
            <input type="text"     name="userId"   placeholder="ユーザ名" required> </br>
            <input type="password" name="password" placeholder="パスワード" required> </br>
            <button type="submit">送信</button>
            <button type="button" id="cancelButton">キャンセル</button>
        </form>
    </div>

    <script src="./js/hari.js"></script>
    <!-- エラーメッセージの表示 -->
    <% if (request.getAttribute("error") != null) { %>
        <p style="color:red;"><%= request.getAttribute("error") %></p>
    <% } %>

</body>
</html>