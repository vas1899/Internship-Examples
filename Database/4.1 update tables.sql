UPDATE Items
SET Price = 10.00
WHERE Id = 1

-- Receipt/Order 2
INSERT INTO Receipt(TransactionTime, Total)
VALUES (GETDATE(), 0)

INSERT INTO ItemsInReceipt(ReceiptId, ItemId, Quantity)
VALUES (2, 1, 1)
UPDATE Receipt
SET Total = (
SELECT (Items.Price * ItemsInReceipt.Quantity)
FROM Items, ItemsInReceipt
WHERE ItemsInReceipt.ReceiptId = Receipt.Id AND Items.Id = ItemsInReceipt.ItemId AND ItemsInReceipt.Id = 2
)
WHERE Receipt.Id = 2;

UPDATE Items
SET Price = 15.00
WHERE Id = 1

-- Receipt/Order 3
INSERT INTO Receipt(TransactionTime, Total)
VALUES (GETDATE(), 0)

INSERT INTO ItemsInReceipt(ReceiptId, ItemId, Quantity)
VALUES (3, 1, 1)
UPDATE Receipt
SET Total = (
SELECT (Items.Price * ItemsInReceipt.Quantity)
FROM Items, ItemsInReceipt
WHERE ItemsInReceipt.ReceiptId = Receipt.Id AND Items.Id = ItemsInReceipt.ItemId AND ItemsInReceipt.Id = 3
)
WHERE Receipt.Id = 3;

