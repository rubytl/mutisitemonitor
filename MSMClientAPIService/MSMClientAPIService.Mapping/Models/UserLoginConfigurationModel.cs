﻿using System;
using System.Collections.Generic;
using System.Text;

namespace MSMClientAPIService.Mapping.Models
{
    public class UserLoginConfigurationModel
    {
        public int UserId { get; set; }

        public string UserName { get; set; }

        public string RoleName { get; set; }

        public Guid? RestrictedGroupID { get; set; }
    }
}
