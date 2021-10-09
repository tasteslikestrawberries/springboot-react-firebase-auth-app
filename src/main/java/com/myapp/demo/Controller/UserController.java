package com.myapp.demo.Controller;

import com.myapp.demo.Model.User;
import com.myapp.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    //injecting service
    @Autowired
    private UserService userService;

    //saving data into database:
    @PostMapping("/add")
    public String add(@RequestBody User user) {

        userService.saveUser(user);
        return "New user is added";
    }
    @GetMapping("/getAll")
    public List<User> getAllUsers(){

        return userService.getAllUsers();
    }

    @GetMapping("/getUserByUid")
    public User getUserByUid(@RequestParam(required = false) String uid) {

        return userService.getUserByUid(uid);
    }

}