package com.myapp.demo.Service;

import com.myapp.demo.Model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user); //modifier public is redundant for interface methods
    List<User> getAllUsers();
    User getUserByUid(String uid);

}