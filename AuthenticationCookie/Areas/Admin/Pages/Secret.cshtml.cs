using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AuthenticationCookie.Areas.Admin.Pages
{
    [Authorize(Policy = "atleast21")]
    public class SecretModel : PageModel
    {
        
        public void OnGet()
        {
        }
    }
}
