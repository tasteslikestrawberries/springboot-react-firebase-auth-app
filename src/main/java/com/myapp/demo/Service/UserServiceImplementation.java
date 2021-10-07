package com.myapp.demo.Service;

import com.myapp.demo.Model.User;
import com.myapp.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplementation implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll(); //this method will get all users from the database
    }

    @Override
    public User getUserByUid(String uid) {
        return userRepository.findByUid(uid).get();
    }
}
