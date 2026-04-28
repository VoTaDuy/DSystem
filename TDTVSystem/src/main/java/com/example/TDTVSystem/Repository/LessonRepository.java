package com.example.TDTVSystem.Repository;

import com.example.TDTVSystem.Entity.Lessons;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LessonRepository extends JpaRepository<Lessons, Integer> {
    Lessons findLessonByLessonName(String lessonName);


}
