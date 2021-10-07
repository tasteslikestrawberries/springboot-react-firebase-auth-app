package com.myapp.demo.Model;

import javax.persistence.*;

// we can import Lombok (@Data) so we dont have to generate getters and setters
@Entity
@Table(name = "users")
public class User {
    @Id //makes id the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)  //makes id autoincrement
    private int id;
    private String uid;
    private byte[] photo;
    private String name;
    private String surname;
    private String birthdate;
    private String gender;
    private String address;
    private String city;
    private String phone;
    private String employmentdate;
    private String worklocation;
    private String department;


    //constructor
    public User() {
    }

    //getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmploymentdate() {
        return employmentdate;
    }

    public void setEmploymentdate(String employmentdate) {
        this.employmentdate = employmentdate;
    }

    public String getWorklocation() {
        return worklocation;
    }

    public void setWorklocation(String worklocation) {
        this.worklocation = worklocation;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

}


