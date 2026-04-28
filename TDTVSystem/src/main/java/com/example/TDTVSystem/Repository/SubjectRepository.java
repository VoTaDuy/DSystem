package com.example.TDTVSystem.Repository;

import com.example.TDTVSystem.Entity.Subjects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectRepository extends JpaRepository<Subjects, Integer> {
    Subjects findSubjectBySubjectName(String subjectName);
    Subjects findSubjectBySubjectId(int subjectId);
}
