package com.pastepro.pastepro;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PasteRepo extends CrudRepository<Paste, Long> {
}