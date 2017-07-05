using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.WebModels;
using Zamin.Models.Content;

namespace Zamin.Repositories
{
    public interface IArticleRepository : IDisposable
    {
        List<Article> GetArticles();
        Article GetArticle(int articleId);
        bool CreateArticle(ArticleWebModel article);
        bool DeleteArticle(int articleId);
        bool UpdateArticle(ArticleWebModel article);
    }
}
