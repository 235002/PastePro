package com.pastepro.pastepro;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Paste {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String hash;
    private String code;

    public Paste() {
    }

    public Paste(String hash, String code) {
        this.hash = hash;
        this.code = code;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return "Paste{" +
                "id=" + id +
                ", hash='" + hash + '\'' +
                ", code='" + code + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Paste paste = (Paste) o;
        return Objects.equals(id, paste.id) &&
                Objects.equals(hash, paste.hash) &&
                Objects.equals(code, paste.code);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, hash, code);
    }
}