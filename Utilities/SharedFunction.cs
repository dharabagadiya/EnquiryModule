using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Utilities
{
    public static class SharedFunction
    {
        public static bool CreateFolderIfNeeded(string path)
        {
            bool result = true;
            if (!Directory.Exists(path))
            {
                try
                {
                    Directory.CreateDirectory(path);
                }
                catch (Exception)
                {
                    /*TODO: You must process this exception.*/
                    result = false;
                }
            }
            return result;
        }
        public static string getUnixTimeStamp()
        {
            var unixTimestamp = ((DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).Ticks).ToString();
            return unixTimestamp;
        }
        public static string appendCacheKey(string filepath)
        {
            string fpath = SharedFunction.MapPath(filepath);
            string fname = filepath + "?ver=" + ConvertToUnixTimeStamp(File.GetLastWriteTime(fpath));
            return fname;
        }
        public static double ConvertToUnixTimeStamp(DateTime date)
        {
            DateTime unixStart = new DateTime(1970, 1, 1);
            double epoch = Math.Floor((date - unixStart).TotalSeconds);
            return epoch;
        }
        public static string MapPath(string path)
        {
            return HttpContext.Current.Server.MapPath(path);
        }
    }
}
