
-- 3
-- a
SELECT *
FROM Items i
LEFT JOIN StatusItem s
on i.StatusId = s.Id
WHERE s.StatusName = 'Active'
-- b
SELECT *
FROM Items
WHERE Items.ItemName LIKE 'C%'
-- c
SELECT i.ItemName
FROM Items i, ItemsInReceipt ir
WHERE i.Id = ir.ItemId
-- d
SELECT *
FROM Items, Receipt r
WHERE r.TransactionTime BETWEEN '2020-08-25 18:41:00' AND '2020-09-27 18:41:00' 
-- e
SELECT i.ItemName, SUM(r.Total) AS 'Total Price', SUM(ir.Quantity) AS 'Total Quantity'
FROM Items i, ItemsInReceipt ir, Receipt r
WHERE i.Id = ir.ItemId AND ir.ReceiptId = r.Id AND r.TransactionTime BETWEEN MONTH(GETDATE())-1 AND GETDATE()
GROUP BY i.ItemName
ORDER BY i.ItemName


