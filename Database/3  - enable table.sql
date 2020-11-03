 -- 1 d
-- Enable for Change Data Capture
sys.sp_cdc_enable_db  

-- Check if it is enabled
USE Restaurant  
GO  
EXEC sys.sp_cdc_enable_db  
GO  

-- Enable a Table 
USE Restaurant  
GO  
EXEC sys.sp_cdc_enable_table  
@source_schema = N'dbo',  
@source_name   = N'Items',  
@role_name     = NULL,  
@supports_net_changes = 1  
GO