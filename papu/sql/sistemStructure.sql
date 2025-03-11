CREATE TABLE encuesta(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    sistem VARCHAR(15) NOT NULL,
    username VARCHAR(30) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp() 
);