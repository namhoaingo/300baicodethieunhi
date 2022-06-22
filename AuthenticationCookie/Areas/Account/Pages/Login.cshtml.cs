using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AuthenticationCookie.Areas.Account.Pages
{
    public class LoginModel : PageModel
    {        
        [BindProperty]
        public string UserName { get; set; }

        [BindProperty]

        public string Password { get; set; }

        [BindProperty]

        public string RedirectUrl { get; set; }

        public IActionResult OnGet(string returnUrl)
        {
            
            RedirectUrl = returnUrl;

            return Page();
        }

        public IActionResult OnPost()
        {
            // Claim
            List<Claim> claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name, "Nam"),
                new Claim(ClaimTypes.DateOfBirth, "2010-06-25")
            };

            // Claim Identity 
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, "nam claim identity");

            // User Princicple
            var userPrinciple = new ClaimsPrincipal(new List<ClaimsIdentity>() { claimsIdentity });

            // Log customer in
            HttpContext.SignInAsync(userPrinciple);
            return Redirect(RedirectUrl);
        }

    }
}
