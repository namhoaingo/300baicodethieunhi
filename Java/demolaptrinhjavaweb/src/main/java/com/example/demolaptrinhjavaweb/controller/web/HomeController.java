package com.example.demolaptrinhjavaweb.controller.web;

import com.example.demolaptrinhjavaweb.model.UserModel;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

// allow multiple url
@WebServlet(urlPatterns = {"/trang-chu"})
public class HomeController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        UserModel userModel = new UserModel();
        userModel.setUserName("Hello World");
        req.setAttribute("model", userModel);
        RequestDispatcher rd = req.getRequestDispatcher("/views/web/home.jsp");
        rd.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }
}
