﻿using System;
using System.Collections.Generic;

namespace MSM.Data.Models
{
    public partial class SnmpDataTemplate
    {
        public int SnmpDataTemplateId { get; set; }
        public string MibFilesPackageId { get; set; }
        public string Name { get; set; }
    }
}
