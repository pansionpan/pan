package com.icss.validform;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CheckUserName
 */
@WebServlet("/CheckUserName")
public class CheckUserName extends HttpServlet {

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		System.out.println("get请求");		
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		
		String name = request.getParameter("name");
		String param = request.getParameter("param");
		
		System.out.println("post请求");
		System.out.println("name=" + name);
		System.out.println("param=" + param);
		
		String s;
		
		if ("tom".equals(param) || "jack".equals(param)) {
			s = "{\"info\":\"用户名已经被占用\",\"status\":\"n\"}";
		} else {
			s = "{\"info\":\"用户名可以使用\",\"status\":\"y\"}";
		}
		
		//模拟网络延迟
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {			
			e.printStackTrace();
		}
		
		out.print(s);		
	}

}