-- 3 - e
CREATE VIEW [MONTLY_SALES] AS
SELECT i.ItemName, SUM(r.Total) AS 'Total Price', SUM(ir.Quantity) AS 'Total Quantity'
FROM Items i, ItemsInReceipt ir, Receipt r
WHERE i.Id = ir.ItemId AND ir.ReceiptId = r.Id AND r.TransactionTime BETWEEN MONTH(GETDATE())-1 AND GETDATE()
GROUP BY i.ItemName
ORDER BY i.ItemName