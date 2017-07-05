﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zamin.Models
{
    public class OperationStatus
    {

        public bool Success { get; set; }


        public int RecordsAffected { get; set; }


        public string Message { get; set; }

        public Object OperationID { get; set; }


        public string ExceptionMessage { get; set; }


        public string ExceptionStackTrace { get; set; }


        public string ExceptionInnerMessage { get; set; }


        public string ExceptionInnerStackTrace { get; set; }


        public int? ItemId { get; set; }

        public string Misc { get; set; }


        public static OperationStatus CreateFromException(string message, Exception ex)
        {
            var opStatus = new OperationStatus
            {
                Success = false,
                Message = message,
                OperationID = null
            };

            if (ex == null) return opStatus;

            opStatus.ExceptionMessage = ex.Message;
            opStatus.ExceptionStackTrace = ex.StackTrace;
            opStatus.ExceptionInnerMessage = (ex.InnerException == null) ? null : ex.InnerException.Message;
            opStatus.ExceptionInnerStackTrace = (ex.InnerException == null) ? null : ex.InnerException.StackTrace;
            return opStatus;
        }
    }

}

