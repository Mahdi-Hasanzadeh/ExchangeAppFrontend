namespace Authentication.Client.Common
{
    public class BreadcrumbItem
    {
        public string Text { get; set; }
        public string Link { get; set; }

        public BreadcrumbItem(string text, string link = "#")
        {
            Text = text;
            Link = link;
        }
    }

}
