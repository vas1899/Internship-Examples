-- 1 - a, b

CREATE TABLE StatusItem(
	Id int NOT NULL IDENTITY(1,1) Primary Key,
	StatusName NVARCHAR(15) NOT NULL,
);

CREATE TABLE Categories(
	Id int NOT NULL IDENTITY(1,1) Primary Key,
	CategoryName nvarchar(100) NOT NULL
);

CREATE TABLE Items(
	Id int NOT NULL IDENTITY(1,1) Primary Key,
	ItemName nvarchar(100) NOT NULL,
	Picture nvarchar(50),
	DescriptionItem nvarchar(500),
	Price smallmoney NOT NULL,
	CategoryId int NOT NULL FOREIGN KEY REFERENCES Categories(Id) ON DELETE CASCADE,
	StatusId int NOT NULL FOREIGN KEY REFERENCES StatusItem(Id) ON DELETE CASCADE
);

CREATE TABLE Ingredients(
	Id int NOT NULL IDENTITY(1,1) Primary Key,
	IngredientName nvarchar(100) NOT NULL,
);

CREATE TABLE IngredientsItems(
	Id int NOT NULL IDENTITY(1,1) Primary Key,
	ItemId int NOT NULL FOREIGN KEY REFERENCES Items(Id) ON DELETE CASCADE,
	IngredientId int NOT NULL FOREIGN KEY REFERENCES Ingredients(Id) ON DELETE CASCADE
);

-- 1 - c
CREATE TABLE Receipt(
	Id int NOT NULL IDENTITY(1,1) Primary Key,
	TransactionTime SmallDateTime,
	Total money
);

CREATE TABLE ItemsInReceipt(
	Id int NOT NULL IDENTITY(1,1) Primary Key,
	ReceiptId int FOREIGN KEY REFERENCES Receipt(Id),
	ItemId int FOREIGN KEY REFERENCES Items(Id),
	Quantity int NOT NULL
);
