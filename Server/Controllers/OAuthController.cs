using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Text.Json.Serialization;
using System.Net.Http.Json;
using System.Text.Json;
using Newtonsoft.Json;

namespace Server.Controllers
{
    public class OAuthController : Controller
    {

        // This is the call which Client will call to get the login form
        [HttpGet]
        public IActionResult Authorize(
            [FromQuery] AuthorizeViewModel authorizeViewModel)
        {
            return View(authorizeViewModel);
        }

        [HttpPost]
        public IActionResult AuthorizePost(
            [FromForm] AuthorizeViewModel authorizeViewModel)
        {
            // Get username and password
            // Check with the DB
            const string code = "afdsfsafdsa";
            var query = new QueryBuilder();
            query.Add("code", code);
            query.Add("state", authorizeViewModel.state);

            return Redirect($"{authorizeViewModel.redirect_uri}{query}");
        }

        //public async Task<IActionResult> Token(
        //    string grant_type,
        //    string code, 
        //    string redirect_uri,
        //    string client_id)
        //{
        // Validate the code


        //    var claims = new[]
        //    {
        //        new Claim(JwtRegisteredClaimNames.Sub, "some_id"),
        //        new Claim("granny", "cookie")
        //    };

        //var secretBytes = Encoding.UTF8.GetBytes(Constants.Secret);
        //var key = new SymmetricSecurityKey(secretBytes);
        //var algorithm = SecurityAlgorithms.HmacSha256;
        //var signingCredentials = new SigningCredentials(key, algorithm);
        //var token = new JwtSecurityToken(
        //    Constants.Issuer, Constants.Audience, claims, notBefore: DateTime.Now, expires: DateTime.Now.AddHours(1), signingCredentials);

        //var tokenJson = new JwtSecurityTokenHandler().WriteToken(token);

        //var responseObject = new
        //{
        //    token,
        //    token_type = "Bearer",
        //    raw_claim = "namtutorial"
        //};
        //var responseJson = JsonSerializer.Serialize(responseObject);

        //var responseJsonByte = Encoding.UTF8.GetBytes(responseJson);
        //await Response.Body.WriteAsync(responseJsonByte, 0, responseJsonByte.Length);

        //return Redirect(redirect_uri);

        // some mechanism for validating the code


        //}

        [HttpPost, HttpGet]
        public async Task Token(
            string grant_type, // flow of access_token request
            string code, // confirmation of the authentication process
            string redirect_uri,
            string client_id,
            string refresh_token)
        {
            // some mechanism for validating the code

            var claims = new[]
          {
                new Claim(JwtRegisteredClaimNames.Sub, "some_id"),
                new Claim("granny", "cookie")
            };

            var secretBytes = Encoding.UTF8.GetBytes(Constants.Secret);
            var key = new SymmetricSecurityKey(secretBytes);
            var algorithm = SecurityAlgorithms.HmacSha256;

            var signingCredentials = new SigningCredentials(key, algorithm);

            var token = new JwtSecurityToken(
                issuer: Constants.Issuer,
                audience: Constants.Audience,
                claims: claims,
                notBefore: DateTime.Now,
                expires: grant_type == "refresh_token"
                    ? DateTime.Now.AddMinutes(20)
                    : DateTime.Now.AddMinutes(2),
                signingCredentials: signingCredentials);

            var access_token = new JwtSecurityTokenHandler().WriteToken(token);

            var responseObject = new
            {
                access_token = access_token,
                token_type = "Bearer",
                raw_claim = "oauthTutorial",
                refresh_token = "RefreshTokenSampleValueSomething77"
            };

            var responseJson = JsonConvert.SerializeObject(responseObject);
            var responseBytes = Encoding.UTF8.GetBytes(responseJson);

            await Response.Body.WriteAsync(responseBytes, 0, responseBytes.Length);

            //return Redirect(redirect_uri);
        }

        //[HttpPost]
        //public  IActionResult Token()
        //{
        //    return View();
        //}
    }
}
