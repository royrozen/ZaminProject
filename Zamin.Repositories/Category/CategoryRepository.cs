﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using System.Threading.Tasks;
using Zamin.Enums;
using Zamin.Helpers;
using Zamin.Models.Content;
using Zamin.Models.General;
using Zamin.WebModels;

namespace Zamin.Repositories
{
    public class CategoryRepository : RepositoryBase<DataContext>, ICategoryRepository
    {
        public CategoryRepository()
        {

        }

        public CategoryRepository(DataContext dataContext)
            : base(dataContext)
        {

        }

        public List<CourseCategory> GetCategories()
        {
            return DataContext.CourseCategories.Include(c=>c.Courses).Where(c => c.Active).ToList();
        }

        public int CreateCategory(CourseCategoryWebModel category)
        {
            var categoryNameExists = DataContext.CourseCategories.SingleOrDefault(c => c.CategoryName == category.CategoryName && c.Active);
            if (categoryNameExists != null) return -1;
            var dbModel = AutoMapper.Mapper.Map<CourseCategoryWebModel, CourseCategory>(category);

            dbModel.Active = true;
           var newCategory = DataContext.CourseCategories.Add(dbModel);
            var success = Save();
            if (!success) return -1;
            
            return newCategory.Id;
        }

        public int UpdateCategory(CourseCategoryWebModel category)
        {
            var dbModel = DataContext.CourseCategories.SingleOrDefault(c => c.Id == category.Id);
            if (dbModel == null) return -1;
            AutoMapper.Mapper.Map(category, dbModel);

            dbModel.Active = true;
            var success = Save();
            if (!success) return -1;

            return category.Id;

        }

        public bool DeleteCategory(int categoryId)
        {
            var category = DataContext.CourseCategories.FirstOrDefault(c => c.Id == categoryId);
            if (category == null) return false;
            category.Active = false;
            return Save();
        }
    }
}