using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class AuthorizeViewModel
    {
        //From OAuth
        public string response_type { get; set; }
        public string client_id { get; set; }
        public string redirect_uri { get; set; }
        public string scope { get; set; }
        public string state { get; set; }
        
        //From customer
        public string username { get; set; }
        public string password { get; set; }
    }
}
