<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2015/3/2 0002
  Time: 上午 12:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" contect="text/html" charset=UTF-8">
    <title></title>
    <%@ include file="plugins/includeExtjs.jsp" %>
    <script type="text/javascript" src="app.js"></script>
</head>
<body>

</body>
</html>
