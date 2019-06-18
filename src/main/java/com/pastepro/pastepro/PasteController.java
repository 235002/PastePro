package com.pastepro.pastepro;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class PasteController {
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

    @PostMapping("/api/paste2")
    public boolean createPaste(@RequestBody Paste paste)
    {
        pasteRepo.save(paste);
        return true;
    }
}