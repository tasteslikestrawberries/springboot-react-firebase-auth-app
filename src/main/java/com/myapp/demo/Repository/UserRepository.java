package com.myapp.demo.Repository;

import com.myapp.demo.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
//<User,Integer> because id in Employee model that is primary key is integer
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByUid(String uid);
}