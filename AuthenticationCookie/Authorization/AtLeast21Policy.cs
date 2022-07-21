using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AuthenticationCookie.Authorization
{
    public class MinimumAge: IAuthorizationRequirement
    {

        public MinimumAge(int minimumAgeAllowed)
        {
            MinimumAgeAllowed = minimumAgeAllowed;
        }
        public int MinimumAgeAllowed { get; set; }
    }

    public class AtLeast21PolicyHandler : AuthorizationHandler<MinimumAge>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, MinimumAge requirement)
        {
            // Get the current claim 
            var ageClaim = context.User.FindFirst(x => x.Type == ClaimTypes.DateOfBirth);

            if(ageClaim is null)
            {
                return Task.CompletedTask;
            }
            // compare with the age
            var dateOfBirth = Convert.ToDateTime(ageClaim.Value);
            var age = dateOfBirth.Year;
            var calculatedAge = DateTime.Now.Year - age;
            if( calculatedAge >= requirement.MinimumAgeAllowed)
            {
                context.Succeed(requirement);
            }

            return Task.CompletedTask;
        }
    }
}
