﻿using System.Collections.Generic;
using System.Web;
using System.Web.Optimization;

namespace RenewIn
{
    public class BundleConfig
    {
        #region Private Members
        private static BundleCollection BUNDLE_COLLECTION;
        private static string THEME_FOLDER_PATH = "~/Content";
        #endregion

        #region Private Members
        private static bool IsFilePathExist(Bundle bundle, string virtualFilePath)
        {
            var resolver = new BundleResolver(BUNDLE_COLLECTION);
            var bundleFilesPath = (List<string>)resolver.GetBundleContents(bundle.Path);
            return bundleFilesPath.Contains(virtualFilePath);
        }
        private static string GetBundleVirtualPath(string virtualPath, string controllerName)
        {
            return string.Format("{0}/{1}_bundle", virtualPath, controllerName);
        }
        #endregion

        #region Public Members
        public static void RegisterBundles(BundleCollection bundles)
        {
            BUNDLE_COLLECTION = bundles;

            #region Public Plugins
            BUNDLE_COLLECTION.Add(new ScriptBundle("~/Scripts/Plugins/BASE_CONTROLLER_bundle").IncludeDirectory("~/Scripts/Plugins", "*.js", true));
            //BUNDLE_COLLECTION.Add(new ScriptBundle("~/Scripts/Common/BASE_CONTROLLER_bundle").IncludeDirectory("~/Scripts/Common", "*.js", true));

            BUNDLE_COLLECTION.Add(new StyleBundle("~/Content/Plugins/BASE_CONTROLLER_bundle").IncludeDirectory("~/Content/Plugins", "*.css"));
            #endregion

            // Don't Change Below Code
            //#if DEBUG
            BundleTable.EnableOptimizations = false;
            //#else
            //BundleTable.EnableOptimizations = true;
            //#endif
        }
        public static List<string> GetStylesBundlePath(string controllerName)
        {
            var bundles = new List<string>();
            foreach (var bundle in BUNDLE_COLLECTION.GetRegisteredBundles())
            {
                if (bundle is StyleBundle && (bundle.Path.EndsWith("BASE_CONTROLLER_bundle") || bundle.Path.EndsWith(string.Format("{0}_bundle", controllerName))))
                {
                    bundles.Add(bundle.Path);
                }
            }
            return bundles;
        }
        public static List<string> GetScriptsBundlePath(string controllerName)
        {
            var bundles = new List<string>();
            foreach (var bundle in BUNDLE_COLLECTION.GetRegisteredBundles())
            {
                if (bundle is ScriptBundle && (bundle.Path.EndsWith("BASE_CONTROLLER_bundle") || bundle.Path.EndsWith(string.Format("{0}_bundle", controllerName))))
                {
                    bundles.Add(bundle.Path);
                }
            }
            return bundles;
        }
        public static List<string> GetThemesPath()
        {
            var themesPaths = new List<string>();
            themesPaths.Add(THEME_FOLDER_PATH);
            return themesPaths;
        }
        public static void AddScript(string directoryPath, string fileName, string controllerName)
        {
            var bundleVirtualPath = GetBundleVirtualPath(directoryPath, controllerName);
            var bundle = BUNDLE_COLLECTION.GetBundleFor(bundleVirtualPath);
            if (bundle == null)
            {
                BUNDLE_COLLECTION.Add(new ScriptBundle(bundleVirtualPath).Include(string.Format("{0}/{1}", directoryPath, fileName)));
            }
            else
            {
                var filePath = string.Format("{0}/{1}", directoryPath, fileName);
                if (!IsFilePathExist(bundle, filePath)) { bundle.Include(filePath); }
            }
        }
        public static void AddStyle(string directoryPath, string fileName, string controllerName)
        {
            var themesPath = GetThemesPath();
            foreach (var themePath in themesPath)
            {
                #region Theme Directory Path Building
                directoryPath = directoryPath.Replace("~/", "");
                var tempDirectoryPath = string.Format("{0}{1}", themePath, directoryPath);
                tempDirectoryPath = tempDirectoryPath.TrimEnd('/');
                #endregion

                var bundleVirtualPath = GetBundleVirtualPath(tempDirectoryPath, controllerName);
                var bundle = BUNDLE_COLLECTION.GetBundleFor(bundleVirtualPath);

                if (bundle == null)
                {
                    BUNDLE_COLLECTION.Add(new StyleBundle(bundleVirtualPath).Include(string.Format("{0}/{1}", tempDirectoryPath, fileName)));
                }
                else
                {
                    var filePath = string.Format("{0}/{1}", tempDirectoryPath, fileName);
                    if (IsFilePathExist(bundle, filePath)) continue;
                    bundle.Include(filePath);
                }
            }
        }
        #endregion
    }
}
