using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zamin.Helper
{
    public static class CsvHelper
    {
        public static string CreatCsvLine(params object[] fileds)
        {
            var sb = new StringBuilder();
            foreach (var item in fileds)
            {
                if (sb.Length > 0)
                {
                    sb.Append(',');
                }
                sb.Append(string.Format("\"{0}\"", item));
            }
            sb.Append(Environment.NewLine);
            return sb.ToString();
        }

    }
}
