package com.pastepro.pastepro;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class PasteController {
    @Autowired
    PasteRepo pasteRepo;

    public PasteController(PasteRepo pasteRepo) {
        this.pasteRepo = pasteRepo;
    }

    @GetMapping("/paste/{id}")
    public ResponseEntity<?> getPaste(@PathVariable Long id)
    {
        Optional<Paste> pastes = pasteRepo.findById(id);
        return pastes.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/paste/{hash}")
    public ResponseEntity<?> getCode(@PathVariable String hash) {
        List<Paste> result = new ArrayList<>();
        result = pasteRepo.findByHash(hash);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @PostMapping("/paste")
    public ResponseEntity<?> createPaste(@RequestBody Paste paste) {
        pasteRepo.save(paste);
        return new ResponseEntity("Expense added succcessfully", HttpStatus.OK);
    }
}