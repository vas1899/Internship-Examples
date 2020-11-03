--1 -e - i
CREATE PROCEDURE ADDITEM 
@ItemName nvarchar(100), 
@Picture nvarchar(50) = NULL,
@DescriptionItem nvarchar(500) = NULL,
@Price smallmoney,
@CategoryId int,
@StatusId int
AS
INSERT INTO dbo.Items(ItemName, Picture, DescriptionItem, Price, CategoryId, StatusId)
VALUES (@ItemName, @Picture,  @DescriptionItem, @Price, @CategoryId, @StatusId)
GO
--1 -e - ii
CREATE PROCEDURE CLEARRECEIPT
@TransactionTime SmallDateTime = NULL,
@Total money = NULL,
@ReceiptId int
AS
INSERT INTO dbo.Receipt VALUES(GETDATE(), 0)
DELETE FROM dbo.ItemsInReceipt WHERE ItemsInReceipt.ReceiptId = @ReceiptId
GO
