﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.WebModels;
using Zamin.Models.Content;
namespace Zamin.Repositories
{
    public interface ILessonRepository :IDisposable
    {

        List<Lesson> GetLessonsByCourseId(int courseId);
        Lesson GetLesson(int lessonId);
        bool CreateLesson(LessonWebModel lesson);
        bool DeleteLesson(int lessonId);
        bool UpdateLesson(LessonWebModel lesson);
        bool LikeLesson(string loginToken, int lessonId);
    }
}