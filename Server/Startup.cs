using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace Server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication("OAuth")
              .AddJwtBearer("OAuth", config =>
              {
                  var secretBytes = Encoding.UTF8.GetBytes(Constants.Secret);
                  var key = new SymmetricSecurityKey(secretBytes);

                  //config.Events = new JwtBearerEvents()
                  //{
                  //    OnMessageReceived = context =>
                  //    {
                  //        if (context.Request.Headers.TryGetValue("Authorization", out var Bearer))
                  //        {
                  //            //context.Token = Bearer;
                  //            Console.WriteLine(Bearer);
                  //        }

                  //        return Task.CompletedTask;
                  //    }
                  //};

                  config.TokenValidationParameters = new TokenValidationParameters()
                  {
                      ClockSkew = TimeSpan.Zero,
                      ValidIssuer = Constants.Issuer,
                      ValidAudience = Constants.Audience,
                      IssuerSigningKey = key,
                  };
              });

            services.AddControllersWithViews();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
