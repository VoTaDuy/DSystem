package com.example.TDTVSystem.Repository;

import com.example.TDTVSystem.Entity.Subjects;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subjects, Integer> {
}
