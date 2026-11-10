-- Insert dummy notes
SELECT * FROM Category;
SELECT * FROM Notes;
INSERT INTO Notes(Title,Description,Status,CategoryId,CreatedAt) VALUES
('Dummy 1','Dummy one notes','Draft',2,SYSDATETIMEOFFSET()),
('Dummy 2','Dummy two notes','Completed',3,SYSDATETIMEOFFSET()),
('Dummy 3','Dummy three notes','Draft',4,SYSDATETIMEOFFSET());