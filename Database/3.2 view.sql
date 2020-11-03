-- 1 - f
-- lunch menu, price 20% off, between 12 and 14
CREATE VIEW [LUNCHVIEW] AS
SELECT ItemName, (Price/5)*4 AS 'Lunch Price', DescriptionItem, CategoryName
FROM dbo.Items i, dbo.Categories c
WHERE i.CategoryId = c.Id
AND (SELECT DATEPART(hour, GETDATE()) AS DatePartInt) >= 12
AND (SELECT DATEPART(hour, GETDATE()) AS DatePartInt) < 14