package com.myapp.demo.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "files")
public class File {
    @Id
    //The @GeneratedValue annotation denotes that a value for a column, which must be annotated with @Id is generated.
    // The elements strategy and generator on the annotation describe how the generated value is obtained.
    //A UUID (Universal Unique Identifier) is a 128-bit value used to uniquely identify an object or entity on the internet
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    private String name;
    private String type;

    //LOB is datatype for storing large object data. There’re two kinds of LOB: BLOB and CLOB:
    //BLOB is for storing binary data and CLOB is for storing text data
    @Lob
    private byte[] data;

    public File() {
    }

    public File(String name, String type, byte[] data) {
        this.name = name;
        this.type = type;
        this.data = data;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

}