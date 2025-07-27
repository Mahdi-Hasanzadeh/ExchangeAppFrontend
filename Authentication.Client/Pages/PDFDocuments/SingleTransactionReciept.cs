using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

namespace Authentication.Client.Pages.PDFDocuments
{
    public class SingleTransactionReciept : IDocument
    {
        public string CustomerName { get; set; }
        public decimal Amount { get; set; }

        public DocumentMetadata GetMetadata() => DocumentMetadata.Default;

        public void Compose(IDocumentContainer container)
        {
            container.Page(page =>
            {
                page.Size(PageSizes.A4);
                page.Margin(30);
                page.DefaultTextStyle(x => x.FontSize(14));

                page.Content()
                    .Column(col =>
                    {
                        col.Spacing(10);
                        col.Item().Text($"رسید تراکنش").FontSize(20).Bold();
                        col.Item().Text($"نام مشتری: {CustomerName}");
                        col.Item().Text($"مبلغ: {Amount:N0} افغانی");
                        col.Item().Text($"تاریخ: {DateTime.Now:yyyy/MM/dd}");
                    });
            });
        }
    }

}
