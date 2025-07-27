using Blazored.Toast.Services;
using Microsoft.AspNetCore.Components.Forms;

namespace Authentication
{

    public class MenuItems
    {
        public string Name { get; set; }
        public string Href { get; set; }
        public List<NavbarItem> SubMenu { get; set; } = new List<NavbarItem>();
    }
    public static class NavItemsHelper
    {

        public static List<NavbarItem> Settings = new List<NavbarItem>()
        {
            new NavbarItem("اطلاعات صرافی","/settings/owner-info"),
            new NavbarItem("کاربران","/settings/subUsers"),
        };


        public static List<NavbarItem> CustomerTransactionsRegistration = new List<NavbarItem>()
        {
            new NavbarItem("برداشت / رسید وجه","/RecieptsRegistration/CashReceiptAndWithdrawal"),
            new NavbarItem("خرید و فروش وجه","/RecieptsRegistration/currencyExchange"),
            new NavbarItem("انتقال وجه","/RecieptsRegistration/TransferBetweenAccount"),
        };

        public static List<NavbarItem> OfficeTransactionsRegistration = new List<NavbarItem>()
        {
            new NavbarItem("برداشت / رسید وجه","/RecieptsRegistration/OfficeCashReceiptAndWithdrawal"),
            new NavbarItem("خرید و فروش وجه","/RecieptsRegistration/CashBuyAndSell"),
        };


        //دفتر کل
        public static List<NavbarItem> GeneralLedger = new List<NavbarItem>()
        {
            new NavbarItem("لیست مشتریان","/GeneralLedger/Customers"),
            new NavbarItem("وضعیت حساب مشتریان","/GeneralLedger/GeneralList"),
            //new NavbarItem("لیست طلبکاران","/GeneralLedger/CreditorsList"),
            //new NavbarItem("لیست بدهکاران","/GeneralLedger/DeptorsList"),
        };

        public static List<NavbarItem> Magazine = new List<NavbarItem>()
        {
            new NavbarItem("عملیات روز","/journal/dailyOperations"),
        };


        public static List<NavbarItem> CurrencySectionItems = new List<NavbarItem>()
        {
            new("نرخ تبادله ارزها","currency/exchangeRate"),
            new("افزودن/ویرایش ارزها","currency/addOrEdit"),
        };

        public static List<NavbarItem> AccountManagement = new List<NavbarItem>()
        {
            new("حسابات مشتریان","accounts/customers"),
            new("حسابات شخصی","accounts/personal"),
        };
    }


    public class NavbarItem
    {
        public NavbarItem(string name, string href)
        {
            Name = name;
            Href = href;
        }

        public string Name { get; set; }

        public string Href { get; set; }


    }
    public class TransactionDettailsForPrint
    {
        public int TransactionId { get; set; }
        public string CustomerName { get; set; } = string.Empty;
        public int CustomerAccountNumber { get; set; }
        public string TransactionType { get; set; } = string.Empty;
        public string DealType { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public string CurrencyName { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public string Note { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }

    public class BuyAndSellTransactionForPrint()
    {

        public string CustomerName { get; set; } = string.Empty;

        public string TransactionType { get; set; } = string.Empty;

        public string SourceCurrencyName { get; set; } = string.Empty;

        public string TargetCurrencyName { get; set; } = string.Empty;

        public decimal Amount { get; set; } = 0;

        public decimal Rate { get; set; } = 0;

        public decimal ConvertedAmount { get; set; } = 0;

        public string Description { get; set; } = string.Empty;

        public string CreatedDate { get; set; }
    }

    public static class ImageHelper
    {
        public static async Task<(byte[]? ImageData, string? PreviewBase64, string? ErrorMessage)> HandleImageUploadAsync(IBrowserFile file, int maxFileSizeMB = 5)
        {
            if (file == null)
                return (null, null, "هیچ فایلی انتخاب نشده است.");

            // Validate MIME type starts with "image/"
            if (!file.ContentType.StartsWith("image/"))
            {
                return (null, null, "فقط فایل‌های تصویری مجاز هستند.");
            }

            if (file.Size > maxFileSizeMB * 1024 * 1024)
                return (null, null, $"حجم تصویر نباید بیشتر از {maxFileSizeMB} مگابایت باشد.");

            using var stream = new MemoryStream();
            await file.OpenReadStream(maxAllowedSize: maxFileSizeMB * 1024 * 1024).CopyToAsync(stream);
            var imageBytes = stream.ToArray();
            var preview = $"data:{file.ContentType};base64,{Convert.ToBase64String(imageBytes)}";

            return (imageBytes, preview, null);
        }
    }


}
