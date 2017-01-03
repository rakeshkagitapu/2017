//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SPFS.Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class SPFS_STAGING_SUPPLIER_RATINGS
    {
        public int StagingID { get; set; }
        public int Rating_period { get; set; }
        public int SiteID { get; set; }
        public int CID { get; set; }
        public int Inbound_parts { get; set; }
        public int OTR { get; set; }
        public int OTD { get; set; }
        public int PFR { get; set; }
        public System.DateTime Initial_submission_date { get; set; }
        public Nullable<bool> Temp_Upload_ { get; set; }
        public Nullable<bool> Interface_flag { get; set; }
        public int UserID { get; set; }
        public System.DateTime Created_date { get; set; }
        public string Created_by { get; set; }
        public Nullable<System.DateTime> Modified_date { get; set; }
        public string Modified_by { get; set; }
    
        public virtual SPFS_SITES SPFS_SITES { get; set; }
        public virtual SPFS_SUPPLIERS SPFS_SUPPLIERS { get; set; }
        public virtual SPFS_USERS SPFS_USERS { get; set; }
    }
}