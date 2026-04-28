package com.example.TDTVSystem.Repository;


import com.example.TDTVSystem.Entity.Classes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClassRepository extends JpaRepository<Classes, Integer> {
    Classes findClassesByDescription(String description);

}
